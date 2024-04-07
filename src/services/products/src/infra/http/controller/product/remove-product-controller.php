<?php
  include_once('./application/use-cases/product/remove-product/remove-product.php');

  class RemoveProductController {
    private $removeProductUseCase;

    function __construct(RemoveProduct $removeProductUseCase) {
      $this->removeProductUseCase = $removeProductUseCase;
    }

    function handle($id) {
      try {
        $isProductRemoved = $this->removeProductUseCase->execute($id);

        header("Content-Type: application/json");
        echo json_encode(['removed' => $isProductRemoved]);
      } catch (Exception $e) {
        echo $e->getMessage();
      }
    }
  }