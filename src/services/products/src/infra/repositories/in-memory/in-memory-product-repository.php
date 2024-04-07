<?php

include_once('./application/entities/product.php');
include_once('./application/repositories/products-repository.php');

class InMemoryProductRepository implements ProductsRepository {
  private $products;

  function __construct() {
    $this->products = [
      (object)[
        'id' => '1',
        'name' => 'Product Test',
        'category' => "1",
        'price' => 10.38
      ],
      (object)[
        'id' => '2',
        'name' => 'Product Test 2',
        'category' => "2",
        'price' => 25.36
      ],
      (object)[
        'id' => '3',
        'name' => 'Product Test 3',
        'category' => "3",
        'price' => 15.88
      ]
    ];
  }

  public function create(Product $product): void {
    $this->products[] = $product->props;
  }

  public function findAll(): array | Product {
    return $this->products;
  }

  public function findUnique(string $id) {
    $product = array_filter($this->products, function ($product) use ($id) {
      return $product->id === $id;
    });

    return count($product) > 0 ? $product[0] : null;
  }

  public function save(Product $product): bool {
    $id = $product->props->id;
    $keys = array_column($this->products, 'id');
    $index = array_search($id, $keys);
    
    if ($index >= 0) {
      $this->products[$index]->name = $product->props->name;
      $this->products[$index]->category = $product->props->category;
      $this->products[$index]->price = $product->props->price;

      return true;
    }

    return false;
  }

  public function remove(string $id): bool {
    $product = array_filter($this->products, function ($product) use ($id) {
      return $product->id === $id;
    });

    if (count($product) > 0) {
      $keys = array_column($this->products, 'id');
      $index = array_search($id, $keys);

      if ($index >= 0) {
        unset($this->products[$index]);
        return true;
      }
    }
      
    return false;
  }
}