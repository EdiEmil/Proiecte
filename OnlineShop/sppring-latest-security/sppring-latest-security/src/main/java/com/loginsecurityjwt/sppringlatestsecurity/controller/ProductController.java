package com.loginsecurityjwt.sppringlatestsecurity.controller;

import com.loginsecurityjwt.sppringlatestsecurity.model.Product;
import com.loginsecurityjwt.sppringlatestsecurity.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public ResponseEntity<?> saveProduct(@RequestBody Product product){

        return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.CREATED);
    }

    @DeleteMapping("{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long productId){

        productService.deleteProduct(productId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getAllProducts(){

        return new ResponseEntity<>(productService.findAllProducts(), HttpStatus.OK);
    }
}
