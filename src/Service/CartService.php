<?php

namespace App\Service;


use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Asset\Packages;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class CartService
{

    private $requestStack;
    private $productRepository;
    private $normalizer;
    private $package;

    public function __construct(
        RequestStack $requestStack,
        ProductRepository $productRepository,
        EntityManagerInterface $entityManager,
        NormalizerInterface $normalizer,
        Packages $package
    )
    {
        $this->requestStack = $requestStack;
        $this->productRepository = $productRepository;
        $this->normalizer = $normalizer;
        $this->package = $package;

    }

    public function addItem(int $id){
        $session = $this->requestStack->getSession();
        $orderLines = $this->getOrderLines();

        if(array_key_exists($id, $orderLines)){
            $orderLines[$id]+=1;
        }
        else{
            $orderLines[$id]=1;
        }
        $session->set("cart", $orderLines);

    }


    public function removeItem(int $id){
        $session = $this->requestStack->getSession();
        $orderLines = $this->getOrderLines();

        $orderLines[$id]-=1;
        if($orderLines[$id] == 0){
            unset($orderLines[$id]);
        }
        $session->set("cart", $orderLines);
    }

    public function getCart(){
        $orderLines = $this->getOrderLines();

        $cart = [];

        foreach ($orderLines as $productId => $quantity){
            $product = $this->productRepository->find($productId);
            $normalizedProduct = $this->normalizer->normalize(
                $product,
                "json",
                [AbstractNormalizer::IGNORED_ATTRIBUTES => ["products", '__initializer__', '__cloner__', '__isInitialized__']]);
            $normalizedProduct["quantity"] = $quantity;
            $normalizedProduct["imageUrl"] = $this->package->getUrl($normalizedProduct["imageUrl"]);
            $cart[] = $normalizedProduct;
        }

        return $cart;
    }


    public function getOrderLines(){
        $session = $this->requestStack->getSession();

        return $session->get("cart", []);
    }

    public function clearCart(){
        $session = $this->requestStack->getSession();

        $session->set("cart", []);
    }
}