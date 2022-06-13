<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\OrderRepository;
use App\Repository\UserRepository;
use App\Service\TokenProviderService;
use Doctrine\ORM\EntityManagerInterface;
use ErrorException;
use Psr\Log\LoggerInterface;
use ReallySimpleJWT\Token;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Exception\JsonException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Exception\ExceptionInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class UserController extends AbstractController
{

    private $tokenProvider;

    public function __construct(TokenProviderService $tokenProvider){
        $this->tokenProvider = $tokenProvider;

    }



    public function registration(
        Request $request,
        EntityManagerInterface $entityManager,
        UserRepository $userRepository


    ): JsonResponse
    {
        try {
            $data = $request->toArray();
        }
        catch (JsonException $exception) {
            return new JsonResponse(
                ['message' => $exception->getMessage()],
                JsonResponse::HTTP_BAD_REQUEST
            );
        }


        try {
            $firstName = $data['first_name'];
            $secondName = $data['second_name'];
            $mail = $data['mail'];
            $phoneNumber = $data['phone'];
            $password = $data['password'];
        } catch (ErrorException $ex) {
            return new JsonResponse(
                ['message' => 'Request body not provide some of this parameters: 
                first_name, second_name, mail, phone, password'],
                JsonResponse::HTTP_BAD_REQUEST
            );
        }


        if (
            ($mail === null or strlen($mail) == 0)
            or ($password === null or strlen($password) == 0))
        {
            return new JsonResponse(
                ['message' => "Email and password is required!"],
                JsonResponse::HTTP_BAD_REQUEST
            );
        }

        $user = $userRepository->findOneBy(['email' => $mail]);

        if ($user !== null)
        {
            return new JsonResponse(
                ['message' => "User with email: $mail already exists!"],
                JsonResponse::HTTP_BAD_REQUEST
            );
        }


        $salt = base64_encode(random_bytes(15));


        $hashedPassword = password_hash(
            $password . $salt,
            PASSWORD_DEFAULT,
            ['cost' => 15]
        );

        $newUser = new User(
            $firstName,
            $secondName,
            $mail,
            $phoneNumber,
            $hashedPassword,
            ["ROLE_CUSTOMER"],
            $salt
        );

        $entityManager->persist($newUser);
        $entityManager->flush();

        return new JsonResponse(
            ['id' => $newUser->getId()],
            JsonResponse::HTTP_CREATED
        );



    }

    public function login(
        Request $request,
        UserRepository $userRepository
    ): JsonResponse
    {
        $data = $request->toArray();

        $email = $data['email'];
        $password = $data['password'];

        if($email === null or strlen($email) == 0)
        {
            return new JsonResponse(
                ['message' => 'Email not provided!'],
                JsonResponse::HTTP_BAD_REQUEST
            );
        }

        if($password === null or strlen($password) == 0)
        {
            return new JsonResponse(
                ['message' => 'Password not provided!'],
                JsonResponse::HTTP_BAD_REQUEST
            );
        }

        $user = $userRepository->findOneBy(['email' => $email]);

        if ($user === null)
        {
            return new JsonResponse(
                ['message' => "Client with email: $email does not exists!"],
                JsonResponse::HTTP_NOT_FOUND
            );
        }
        if (!password_verify($password.$user->getSalt(), $user->getPassword()))
        {
            return new JsonResponse(
                ['message' => 'Wrong password!'],
                JsonResponse::HTTP_BAD_REQUEST
            );
        }

        $token = $this->tokenProvider->generateForUser($user);

       return new JsonResponse(["token"=>$token], JsonResponse::HTTP_CREATED);
    }

    public function getCurrentUser(
        NormalizerInterface $normalizer
    ): JsonResponse
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        $user = $this->getUser();


        if (! $user instanceof User) {
            return new JsonResponse(["message"=>"Wrong user interface"], JsonResponse::HTTP_BAD_REQUEST);
//            throw new \LogicException('Wrong user interface!');
        }




        $normalizedUser = $normalizer->normalize($user,
            "json", [AbstractNormalizer::ATTRIBUTES => ["firstName", "secondName", "email"]]);



        return new JsonResponse(
                $normalizedUser
            );
    }

    public function getUserOrders(
        NormalizerInterface $normalizer
    ): JsonResponse
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        $user = $this->getUser();
        $orders = $user->getOrders();

        if (! $user instanceof User) {
            return new JsonResponse(["message"=>"Wrong user interface"], JsonResponse::HTTP_BAD_REQUEST);
//            throw new \LogicException('Wrong user interface!');
        }

        $normalizedOrders = [];
        foreach ($orders as $order){
            $normalizedOrder = $normalizer->normalize($order, "json", [AbstractNormalizer::ATTRIBUTES => ["total", "status", "createdAt"]]);
            $normalizedOrders[] = $normalizedOrder;
        }



        return new JsonResponse(
            $normalizedOrders
        );
    }

}
