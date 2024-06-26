<?php
  include_once('./application/entities/product.php');
  include_once('./application/repositories/products-repository.php');

  class SaveProduct {
    private $productRepository;

    function __construct(ProductsRepository $productRepository) {
      $this->productRepository = $productRepository;
    }

    function execute(Product $product) {
      return $this->productRepository->save($product);
    }
  }