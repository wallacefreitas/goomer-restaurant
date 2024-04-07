<?php
  include_once('./application/use-cases/product/create-product/create-product.php');
  include_once('./application/entities/product.php');

  class CreateProductController {
    private $createProductUseCase;

    function __construct(CreateProduct $createProductUseCase) {
      $this->createProductUseCase = $createProductUseCase;
    }

    function handle($body) {
      try {
        $product = new Product($body);
        $this->createProductUseCase->execute($product->props);

        header("Content-Type: application/json");
        echo json_encode($product->props);
      } catch (Exception $e) {
        echo $e->getMessage();
      }
    }
  }