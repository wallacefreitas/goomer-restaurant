<?php

include_once('./src/application/repositories/products-repository.php');

class RemoveProduct {
  private $productRepository;

  function __construct(ProductsRepository $productRepository) {
    $this->productRepository = $productRepository;
  }

  function execute(string $id) {
    return $this->productRepository->remove($id);
  }
}