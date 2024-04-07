<?php
  include_once('./routes.php');
  include_once('./config.php');

  function bootstrap() {
    config();
    routes();
  }
  
  bootstrap();