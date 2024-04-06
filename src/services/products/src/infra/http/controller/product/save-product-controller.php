<?php
  include_once('./src/application/use-cases/product/save-product/save-product.php');
  include_once('./src/application/entities/product.php');

  class SaveProductController {
    private $saveProductUseCase;

    function __construct(SaveProduct $saveProductUseCase) {
      $this->saveProductUseCase = $saveProductUseCase;
    }

    function handle($body, $id) {
      try {
        $body->id = $id;
        $product = new Product($body);
        $this->saveProductUseCase->execute($product);

        header("Content-Type: application/json");
        echo json_encode($product->props);
      } catch (Exception $e) {
        echo $e->getMessage();
      }
    }
  }