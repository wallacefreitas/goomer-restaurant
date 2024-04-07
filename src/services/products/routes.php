<?php
  include_once('./src/infra/services/router.php');
  include_once('./src/application/entities/product.php');

  include_once('./src/infra/repositories/in-memory/in-memory-product-repository.php');
  include_once('./src/infra/repositories/mysqli/mysqli-product-repository.php');

  include_once('./src/infra/http/controller/product/find-all-products-controller.php');
  include_once('./src/infra/http/controller/product/find-unique-product-controller.php');
  include_once('./src/infra/http/controller/product/create-product-controller.php');
  include_once('./src/infra/http/controller/product/save-product-controller.php');
  include_once('./src/infra/http/controller/product/remove-product-controller.php');

  include_once('./src/application/use-cases/product/create-product/create-product.php');
  include_once('./src/application/use-cases/product/save-product/save-product.php');
  include_once('./src/application/use-cases/product/find-all-products/find-all-products.php');
  include_once('./src/application/use-cases/product/find-unique-product/find-unique-product.php');
  include_once('./src/application/use-cases/product/remove-product/remove-product.php');
 
  function routes() {
    $router = new Router();
    $inMemoryProductRepository = new InMemoryProductRepository();
    $mysqliProductRepository = new MySQLiProductRepository();

    $router->addRoute('GET', '/products', function() use($mysqliProductRepository) {
      $findAllProducts = new FindAllProducts($mysqliProductRepository);
      $findAllProductsController = new FindAllProductsController($findAllProducts);

      return $findAllProductsController->handle();
    });

    $router->addRoute('GET', '/product/:id', function($id) use($mysqliProductRepository) {
      $findUniqueProduct = new FindUniqueProduct($mysqliProductRepository);
      $findUniqueProductController = new FindUniqueProductController($findUniqueProduct);

      return $findUniqueProductController->handle($id);
    });

    $router->addRoute('POST', '/product', function() use($mysqliProductRepository) {
      $createProduct = new CreateProduct($mysqliProductRepository);
      $createProductController = new CreateProductController($createProduct);
      $body = json_decode(file_get_contents('php://input'));
      
      return $createProductController->handle($body);
    });

    $router->addRoute('PUT', '/product/:id', function($id) use($mysqliProductRepository) {
      $saveProduct = new SaveProduct($mysqliProductRepository);
      $saveProductController = new SaveProductController($saveProduct);
      $body = json_decode(file_get_contents('php://input'));
      
      return $saveProductController->handle($body, $id);
    });

    $router->addRoute('DELETE', '/product/:id', function($id) use($mysqliProductRepository) {
      $removeProduct = new RemoveProduct($mysqliProductRepository);
      $removeProductController = new RemoveProductController($removeProduct);

      return $removeProductController->handle($id);
    });

    $router->matchRoute();
  }