<?php
  include_once('./application/entities/product.php');
  include_once('./application/repositories/products-repository.php');

  class MySQLiProductRepository implements ProductsRepository {
    private $mysqli;
    private array $products = array();

    function __construct() {
      mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
      $this->mysqli = new mysqli(getenv("MYSQL_HOST"), getenv("MYSQL_USER"), getenv("MYSQL_PASSWORD"), getenv("MYSQL_DATABASE"));

      if ($this->mysqli->connect_error) {
        die("Connection failed: " . $this->mysqli->connect_error);
      }
    }

    public function create(Product $product): void {
      $new_product = new Product($product->props);
      $new_product = $new_product->props;

      $sql = "INSERT INTO products (id, name, price, category) VALUES ('" . $new_product->id . "', '" . $new_product->name . "', " . $new_product->price . ", '" . $new_product->category . "')";
      $this->mysqli->query($sql);
    }

    public function findAll(): array | Product {
      $sql = "SELECT id, name, price, category FROM products";
      $result = mysqli_query($this->mysqli, $sql, MYSQLI_USE_RESULT);

      while ($row = $result->fetch_object()){
        $product = new Product($row);
        $this->products[] = $product->props;
      }

      return $this->products;
    }

    public function findUnique(string $id) {
      $sql = "SELECT id, name, price, category FROM products WHERE id = '" . $id . "'";
      $result = mysqli_query($this->mysqli, $sql, MYSQLI_USE_RESULT);

      while ($row = $result->fetch_object()){
        $product = new Product($row);
        $this->products[] = $product->props;
      }

      return $this->products;
    }

    public function save(Product $product): bool {
      $product_upd = new Product($product->props);
      $product_upd = $product_upd->props;
      $id = $product->props->id;

      $sql = "UPDATE products SET name = '" . $product_upd->name . "', price = " . $product_upd->price . ", category = '" . $product_upd->category . "' WHERE id = '" . $id . "'"; 
      $result = $this->mysqli->query($sql) === true;
      
      return $result;
    }

    public function remove(string $id): bool {
      $sql = "DELETE FROM products WHERE id = '" . $id . "'";
      $result = $this->mysqli->query($sql) === true;

      return $result;
    }
  }