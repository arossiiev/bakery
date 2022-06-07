<?php

namespace App\Controller;


use App\Entity\Order;
use App\Entity\OrderLine;
use App\Entity\UnauthorizedUser;
use App\Repository\OrderRepository;
use App\Repository\ProductRepository;
use App\Repository\UnauthorizedUserRepository;
use App\Service\CartService;

use Doctrine\ORM\EntityManagerInterface;
use ErrorException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Exception\JsonException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;


class OrderController extends AbstractController
{

    public function addProduct(
        int $id,
        CartService $cartService

    ): JsonResponse
    {
        $cartService->addItem($id);
        $cart = $cartService->getCart();
        return new JsonResponse($cart);
    }

    public function removeProduct(
        int $id,
        CartService $cartService
    ): JsonResponse
    {
        $cartService->removeItem($id);
        $cart = $cartService->getCart();
        return new JsonResponse($cart);

    }


    public function getCart(
        CartService $cartService
    ): JsonResponse
    {
        $cart = $cartService->getCart();
        return new JsonResponse($cart);
    }


    public function checkout(
        Request $request,
        CartService $cartService,
        ProductRepository $productRepository,
        UnauthorizedUserRepository $unauthorizedUserRepository,
        EntityManagerInterface $entityManager
    ){
        try {
            $data = $request->toArray();

        } catch (JsonException $exception) {
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
        } catch (ErrorException $ex) {
            return new JsonResponse(
                ['message' => 'Request body not provide some of this parameters: 
                first_name, second_name, mail, phone'],
                JsonResponse::HTTP_BAD_REQUEST
            );
        }
        try{
            $uusers = $unauthorizedUserRepository->findBy(["email" =>$mail]);
            if(count($uusers) == 0){
                $uuser = new UnauthorizedUser();
                $uuser->setFirstName($firstName);
                $uuser->setEmail($mail);
                $uuser->setPhone($phoneNumber);
                $uuser->setSecondName($secondName);
                $entityManager->persist($uuser);

            }else{
                $uuser = $uusers[0];
            }


            $cart = $cartService->getOrderLines();
            $order = new Order();
            $order->setUnauthorizedUser($uuser);
            $order->setAuthorizedUser(null);

            $total = 0;
            foreach ($cart as $item => $quantity){
                $product = $productRepository->find($item);
                $orderLine = new OrderLine();
                $orderLine->setProduct($product);
                $orderLine->setClientOrder($order);
                $orderLine->setQuantity($quantity);
                $entityManager->persist($orderLine);
                $total += $orderLine->getTotalPrice();
            }
            $order->setTotal($total);
            $order->setStatus(Order::ORDER_IS_PENDING);
            $entityManager->persist($order);

            $entityManager->flush();
            $cartService->clearCart();
        }catch (ErrorException $ex){
            return new JsonResponse(
                ['message' => 'Error while creating order'],
                JsonResponse::HTTP_BAD_REQUEST
            );

        }



        return new JsonResponse([],JsonResponse::HTTP_CREATED);
    }


}
