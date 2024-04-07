<?php

include_once('./application/entities/product.php');

interface ProductsRepository {
  public function create(Product $product): void;
  public function findAll(): array | Product;
  public function findUnique(string $id);
  public function save(Product $product): bool;
  public function remove(string $id): bool;
}