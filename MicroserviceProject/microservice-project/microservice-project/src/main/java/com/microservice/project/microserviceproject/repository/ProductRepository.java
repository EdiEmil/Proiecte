package com.microservice.project.microserviceproject.repository;

import com.microservice.project.microserviceproject.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product,String> {
}
