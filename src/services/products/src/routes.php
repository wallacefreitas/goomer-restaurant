<?php
  include_once('./infra/services/router.php');
  include_once('./application/entities/product.php');

  include_once('./infra/repositories/in-memory/in-memory-product-repository.php');
  include_once('./infra/repositories/mysqli/mysqli-product-repository.php');

  include_once('./infra/http/controller/product/find-all-products-controller.php');
  include_once('./infra/http/controller/product/find-unique-product-controller.php');
  include_once('./infra/http/controller/product/create-product-controller.php');
  include_once('./infra/http/controller/product/save-product-controller.php');
  include_once('./infra/http/controller/product/remove-product-controller.php');

  include_once('./application/use-cases/product/create-product/create-product.php');
  include_once('./application/use-cases/product/save-product/save-product.php');
  include_once('./application/use-cases/product/find-all-products/find-all-products.php');
  include_once('./application/use-cases/product/find-unique-product/find-unique-product.php');
  include_once('./application/use-cases/product/remove-product/remove-product.php');
 
  function routes() {
    $router = new Router();
    $inMemoryProductRepository = new InMemoryProductRepository();
    $mysqliProductRepository = new MySQLiProductRepository();

    $router->addRoute('GET', '/v1/products', function() use($mysqliProductRepository) {
      $findAllProducts = new FindAllProducts($mysqliProductRepository);
      $findAllProductsController = new FindAllProductsController($findAllProducts);

      return $findAllProductsController->handle();
    });

    $router->addRoute('GET', '/v1/product/:id', function($id) use($mysqliProductRepository) {
      $findUniqueProduct = new FindUniqueProduct($mysqliProductRepository);
      $findUniqueProductController = new FindUniqueProductController($findUniqueProduct);

      return $findUniqueProductController->handle($id);
    });

    $router->addRoute('POST', '/v1/product', function() use($mysqliProductRepository) {
      $createProduct = new CreateProduct($mysqliProductRepository);
      $createProductController = new CreateProductController($createProduct);
      $body = json_decode(file_get_contents('php://input'));
      
      return $createProductController->handle($body);
    });

    $router->addRoute('PUT', '/v1/product/:id', function($id) use($mysqliProductRepository) {
      $saveProduct = new SaveProduct($mysqliProductRepository);
      $saveProductController = new SaveProductController($saveProduct);
      $body = json_decode(file_get_contents('php://input'));
      
      return $saveProductController->handle($body, $id);
    });

    $router->addRoute('DELETE', '/v1/product/:id', function($id) use($mysqliProductRepository) {
      $removeProduct = new RemoveProduct($mysqliProductRepository);
      $removeProductController = new RemoveProductController($removeProduct);

      return $removeProductController->handle($id);
    });

    $router->matchRoute();
  }