package com.loginsecurityjwt.sppringlatestsecurity.service;

import com.loginsecurityjwt.sppringlatestsecurity.model.Product;

import java.util.List;

public interface ProductService {
    Product saveProduct(Product product);

    void deleteProduct(Long id);

    List<Product> findAllProducts();
}
