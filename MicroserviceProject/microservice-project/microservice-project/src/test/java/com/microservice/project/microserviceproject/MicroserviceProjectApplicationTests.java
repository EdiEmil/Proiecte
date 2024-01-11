package com.microservice.project.microserviceproject;

import com.microservice.project.microserviceproject.dto.ProductRequest;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.testcontainers.containers.MongoDBContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;
import org.testcontainers.shaded.com.fasterxml.jackson.core.JsonProcessingException;
import org.testcontainers.shaded.com.fasterxml.jackson.databind.ObjectMapper;
import org.testcontainers.utility.DockerImageName;

import java.lang.reflect.Type;
import java.math.BigDecimal;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@Testcontainers
@AutoConfigureMockMvc
class MicroserviceProjectApplicationTests {

	// testul porneste containerul de mongodb prin descarcarea imaginii din docker
	@Container
	static MongoDBContainer mongoDBContainer = new MongoDBContainer("mongo:4.0.10");


	@Autowired
	private MockMvc mockMvc;
	@Autowired
	private ObjectMapper objectMapper; // converteste pojo object in json si invers

	// dupa ce se porneste containerul va adauga dinamic replica set url la "spring.data.mongodb.uri"
	// in program am setat aceasta proprietate manual in application.properties
	@DynamicPropertySource
	static void setProperties(DynamicPropertyRegistry dymDynamicPropertyRegistry){
		dymDynamicPropertyRegistry.add("spring.data.mongodb.uri",mongoDBContainer::getReplicaSetUrl);
	}


	// primul test este pentru createProduct
	@Test
	void shouldCreateProduct() throws Exception { // de la metoada din objectMapper si de la .perform avem nevoie de excceptii
		
	ProductRequest productRequest =	getProductRequest();
	String productRequestString = objectMapper.writeValueAsString(productRequest);
		
		mockMvc.perform(MockMvcRequestBuilders.post("/api/product")
				.contentType(MediaType.APPLICATION_JSON)
				.content(productRequestString))
				.andExpect(status().isCreated()); // verifica daca primim codul 201 created
	}

	private ProductRequest getProductRequest() {
		return ProductRequest.builder()
				.name("Samsung")
				.description("Phone")
				.price(BigDecimal.valueOf(2000))
				.build();
	}

}
