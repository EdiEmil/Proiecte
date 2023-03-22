package com.loginsecurityjwt.sppringlatestsecurity.repository;

import com.loginsecurityjwt.sppringlatestsecurity.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
