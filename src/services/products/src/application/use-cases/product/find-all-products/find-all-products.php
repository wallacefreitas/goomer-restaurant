<?php

include_once('./src/application/repositories/products-repository.php');

class FindAllProducts {
  private $productRepository;

  function __construct(ProductsRepository $productRepository) {
    $this->productRepository = $productRepository;
  }

  function execute() {
    return $this->productRepository->findAll();
  }
}