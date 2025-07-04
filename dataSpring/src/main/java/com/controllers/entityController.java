package com.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.repositories.EntityRepository;
import com.models.entities;

@RestController
public class entityController {

  // ...

  private final EntityRepository entityRepository;

  public entityController(EntityRepository entityRepository) {
    this.entityRepository = entityRepository;  
  }

  @GetMapping("/entities")
  public Iterable<entities> findAllEmsployees() {
    return this.entityRepository.findAll();
  }

  @PostMapping("/entities")
  public entities addOneEmployee(@RequestBody entities entity) {
    return entityRepository.save(entity);
  }
}