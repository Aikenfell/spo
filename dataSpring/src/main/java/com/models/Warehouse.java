package com.models;

import java.util.List;
// import java.time.LocalDate;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "warehouse")
public class Warehouse {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;

  private String name;

  private String location;

  @OneToMany(mappedBy = "warehouse",fetch = FetchType.LAZY)
  private List<Inventory> inventoryList;

  private Integer capacity;

  private Integer occupied = 0;

  private Integer limitWarning = 0;

  // Hibernate expects entities to have a no-arg constructor,
  // though it does not necessarily have to be public.
  private Warehouse() {};

  public Warehouse(String name, String location, Integer capacity, Integer occupied, Integer limitWarning) {
    this.name = name;
    this.location = location;
    this.capacity = capacity;
    this.occupied = occupied;
    this.limitWarning = limitWarning;
  }
  // public void modifyDetails( modifier) {
  //   this.name = modifier.name;
  //   this.location = modifier.location;
  //   this.limitWarning = modifier.limitWarning;
  // }

  public Integer getId() {
    return this.id;
  }

  public String getName() {
    return this.name;
  }

  public Integer getOccupied() {
    return this.occupied;
  }
  
  public void setOccupied(Integer occupied) {
    this.occupied = occupied;
  }
  

  public String getLocation() {
    return this.location;
  }

  public Integer getCapacity() {
    return this.capacity;
  }

  public Integer getLimitWarning() {
    return this.limitWarning;
  }


  public void setLocation(String location) {
    this.location = location;
  }


  public void setName(String name) {
    this.name = name;
  }
  public void setLimitWarning(Integer limitWarning) {
    this.limitWarning = limitWarning;
  }

}