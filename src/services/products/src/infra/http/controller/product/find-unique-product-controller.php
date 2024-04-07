<?php
  include_once('./application/use-cases/product/find-all-products/find-all-products.php');

  class FindUniqueProductController {
    private $findUniqueProductUseCase;

    function __construct(FindUniqueProduct $findUniqueProductUseCase) {
      $this->findUniqueProductUseCase = $findUniqueProductUseCase;
    }

    function handle($id) {
      try {
        $product = $this->findUniqueProductUseCase->execute($id);
      
        header("Content-Type: application/json");
        echo json_encode($product);
      } catch (Exception $e) {
        echo $e->getMessage();
      }
    }
  }