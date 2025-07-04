package com.models;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "entityOne")
public class entityOne {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;
  
  private String propertyOne;
  
  private String propertyTwo;
  
  private Integer propertyThree;
  
  // Hibernate expects entities to have a no-arg constructor,
  // though it does not necessarily have to be public.
  private entityOne() {}
  
  public entityOne(String propertyOne, String propertyTwo, Integer propertyThree) {
    this.propertyOne = propertyOne;
    this.propertyTwo = propertyTwo;
    this.propertyThree = propertyThree;
  }
  
  public Integer getId() {
    return this.id;
  }
  
  public String getPropertyOne() {
    return this.propertyOne;
  }

  public String getPropertyTwo() {
    return this.propertyTwo;
  }

  public Integer getPropertyThree() {
    return this.propertyThree;
  }
}