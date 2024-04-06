<?php
  enum Categories: string {
    case Doces = '1';
    case Salgados = '2';
    case Sucos = '3';
  }

  class Product {
    public $props;

    function __construct($props) {
      if (!isset($props->id)) {
        $props->id = uniqid();
      }

      try {
        $this->props = $props;
      } catch (Exception $e) {
        echo $e->getMessage();
      }
    }

    function getName() {
      return $this->props->name;
    }

    function setName(string $name) {
      $this->props->name = $name;
    }

    function getPrice() {
      return $this->props->price;
    }

    function setPrice(float $price) {
      $this->props->price = $price;
    }

    function getCategory() {
      return $this->props->category;
    }

    function setCategory(Categories $category) {
      $this->props->category = $category;
    }
  }