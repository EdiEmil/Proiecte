package com.loginsecurityjwt.sppringlatestsecurity.service;

import com.loginsecurityjwt.sppringlatestsecurity.model.Product;
import com.loginsecurityjwt.sppringlatestsecurity.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product){

        product.setCreateTime(LocalDateTime.now());

        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(Long id){

        productRepository.deleteById(id);
    }

    @Override
    public List<Product> findAllProducts(){

        return productRepository.findAll();
    }
}
