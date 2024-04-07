<?php

include_once('./application/repositories/products-repository.php');

class CreateProduct {
  private $productRepository;

  function __construct(ProductsRepository $productRepository) {
    $this->productRepository = $productRepository;
  }

  function execute($data) {
    $product = new Product((object)[
      'name' => $data->name,
      'price' => $data->price,
      'category' => $data->category
    ]);

    $this->productRepository->create($product);
  }
}