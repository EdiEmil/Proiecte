package com.microservice.project.microserviceproject.service;

import com.microservice.project.microserviceproject.dto.ProductRequest;
import com.microservice.project.microserviceproject.dto.ProductResponse;
import com.microservice.project.microserviceproject.model.Product;
import com.microservice.project.microserviceproject.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor // pentru dependency injection, se poate si cu Autowierd
@Slf4j // pentru a adauga logs
public class ProductService {

    private final ProductRepository productRepository;

    public void createProduct(ProductRequest productRequest){
        Product product = Product.builder()
                .name(productRequest.getName())
                .description(productRequest.getDescription())
                .price(productRequest.getPrice())
                .build();

        productRepository.save(product);
        log.info("Product {} is saved", product.getId()); // placeholder penntru a adauga id-ul de la product
    }

    public List<ProductResponse> getAllProducts(){
        List<Product> products = productRepository.findAll();

       return products.stream().map(product -> mapToProductResponse(product)).toList();
    }

    private ProductResponse mapToProductResponse(Product product) {
        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .build();
    }
}
