CREATE DATABASE IF NOT EXISTS goomer;

USE goomer;

CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(1) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

INSERT INTO products (id, name, category, price) VALUES (replace(uuid(),'-',''), 'Product 1', '1', 10.72);
INSERT INTO products (id, name, category, price) VALUES (replace(uuid(),'-',''), 'Product 2', '2', 36.48);
INSERT INTO products (id, name, category, price) VALUES (replace(uuid(),'-',''), 'Product 3', '3', 25.93);