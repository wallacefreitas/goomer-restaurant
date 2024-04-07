<?php
  include_once('./application/use-cases/product/find-all-products/find-all-products.php');

  class FindAllProductsController {
    private $findAllProductsUseCase;

    function __construct(FindAllProducts $findAllProductsUseCase) {
      $this->findAllProductsUseCase = $findAllProductsUseCase;
    }

    function handle() {
      try {
        $products = $this->findAllProductsUseCase->execute();
      
        header("Content-Type: application/json");
        echo json_encode($products);
      } catch (Exception $e) {
        echo $e->getMessage();
      }
    }
  }