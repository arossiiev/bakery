<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use App\Repository\ProductTypeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;


class ProductController extends AbstractController
{


    public function getProducts(
        Request $request,
        ProductRepository $productRepository,
        NormalizerInterface $normalizer

    ): JsonResponse
    {
        if($request->query->has("type")){
            $type = $request->query->get("type");
            $products = $productRepository->findBy(["productType" => ["id" => $type]]);

        }
        else{
            $products = $productRepository->findAll();
        }

        $normalizedProducts = [];


        foreach ($products as $product){
            $normalizedProduct = $normalizer->normalize($product, "json", [AbstractNormalizer::IGNORED_ATTRIBUTES => ["products", '__initializer__', '__cloner__', '__isInitialized__']]);
            $normalizedProduct["ImageUrl"] = "http://".$request->getHost().':'.$request->getPort()."/".$normalizedProduct["imageUrl"];
            $normalizedProducts[] = $normalizedProduct;

        }


        return new JsonResponse($normalizedProducts);
    }

    public function getProduct(
        Request $request,
        int $id,
        ProductRepository $productRepository,
        NormalizerInterface $normalizer
    ): JsonResponse
    {
        $product = $productRepository->find($id);
        $normalizedProduct = $normalizer->normalize($product, "json", [AbstractNormalizer::IGNORED_ATTRIBUTES => ["products", '__initializer__', '__cloner__', '__isInitialized__']]);
        $normalizedProduct["imageUrl"] = "http://".$request->getHost().':'.$request->getPort()."/".$normalizedProduct["imageUrl"];
        return new JsonResponse($normalizedProduct);
    }

    public function getProductTypes(
        ProductTypeRepository $productTypeRepository,
        NormalizerInterface $normalizer
    ): JsonResponse
    {
        $productTypes = $productTypeRepository->findAll();
        $normalizedTypes = [];
        foreach($productTypes as $productType){
            $normalizedTypes[] = $normalizer->normalize($productType, "json", [AbstractNormalizer::IGNORED_ATTRIBUTES => ["products"]]);
        }


        return new JsonResponse($normalizedTypes);
    }

}
