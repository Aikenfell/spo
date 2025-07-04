package com.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.util.Optionals;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.repositories.EntityOneRepository;
import com.repositories.EntityOneSpecifications;
import com.models.entityOne;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class entityOneController {

  // ...

  private final EntityOneRepository entityOneRepository;

  public entityOneController(EntityOneRepository entityOneRepository) {
    this.entityOneRepository = entityOneRepository;  
  }

  @GetMapping("/entityOneDynamicTest")
  public List<entityOne> dynamicTest() {
    

      return this.entityOneRepository.findAll(EntityOneSpecifications.testingDynamics("propertyOneOne"));
  }

  @GetMapping("/entityOneDynamicComplex")
  public List<entityOne> dynamicTestComplex() {
          Specification<entityOne> spec = Specification.where(null);        
        final String propertyOne = "propertyOneOne";
        final String propertyTwo = "propertyTwoOne";
        final String propertyThree = null;
        if (propertyOne != null && !propertyOne.isEmpty()) {
            spec = spec.and(EntityOneSpecifications.testingDynamics(propertyOne));
        }
        if (propertyTwo != null && !propertyTwo.isEmpty()) {
            spec = spec.and(EntityOneSpecifications.testingDynamicsComplex(propertyTwo));
        }


      return this.entityOneRepository.findAll(spec);
  }
  
  
  // @CrossOrigin(origins = "http://localhost:3000")
  @GetMapping("/entityOne")
  public Iterable<entityOne> findAllEntities() {
    return this.entityOneRepository.findAll();
  }

  @GetMapping("/entityOne/{propertyOne}")
  public Optional<entityOne> getEntityByPropertyOne(@PathVariable String propertyOne) {

    // Optional<entityOne> entityOne = this.entityOneRepository.findByPropertyOne(propertyOne);

    return this.entityOneRepository.findByPropertyOne(propertyOne);
  }

  @PostMapping(value = "/entityOne", consumes = {"*/*"}) 
  public entityOne addOneEntity(@RequestBody entityOne entity) {
    return entityOneRepository.save(entity);
  }
}