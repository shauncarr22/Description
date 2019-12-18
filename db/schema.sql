DROP DATABASE IF EXISTS productinfo2;

CREATE DATABASE productinfo2;

USE productinfo2;

-- CREATE TABLE products (id VARCHAR(36), PRODUCT_NAME VARCHAR(50), rating int, info(text))
CREATE TABLE information (
    id VARCHAR(36) PRIMARY KEY,
    PRODUCT_NAME VARCHAR(50),
    info text
);

CREATE TABLE bulletPoints (
    id VARCHAR(36) PRIMARY KEY,
    PRODUCT_NAME VARCHAR(50),
    bullet text
);