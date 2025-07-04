package com.models;

import java.time.LocalDate;
import com.models.Warehouse;

import jakarta.annotation.Nullable;
// import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
// import jakarta.persistence.OneToMany;
// import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "inventory")
public class Inventory {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;

  private String name;

  private String location;

  @ManyToOne()
  @JoinColumn(name = "warehouse", referencedColumnName = "id", nullable = false)
  private Warehouse warehouse;

  @Nullable
  private String description;

  private String sku;

  private Integer quantity = 0;

  private boolean perishable = false;

  @Nullable
  private LocalDate expiryDate;

  // Hibernate expects entities to have a no-arg constructor,
  // though it does not necessarily have to be public.  
  private Inventory() {
  }

  public Inventory(String name, String location, String description, String sku, Integer quantity) {
    this.name = name;
    this.location = location;
    this.description = description;
    this.sku = sku;
    this.quantity = quantity;
  }

  public Integer getId() {
    return this.id;
  }

  public String getName() {
    return this.name;
  }

  public String getSku() {
    return this.sku;
  }

  public Integer getQuantity() {
    return this.quantity;
  }

  public String getDescription() {
    return this.description;
  }

  public String getLocation() {
    return this.location;
  }

  public LocalDate getExpiryDate() {
    return this.expiryDate;
  }

  public boolean getPerishable() {
    return this.perishable;
  }

  public void setWarehouse(Warehouse warehouse) {
    this.warehouse = warehouse;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }

  public void setExpiryDate(LocalDate expiryDate) {
    this.expiryDate = expiryDate;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  public Warehouse getWarehouse() {
    return this.warehouse;
  }


  // public Integer getCapacity() {
  // return this.capacity;
  // }

  // public float getLimitWarning() {
  // return this.limitWarning;
  // }
}