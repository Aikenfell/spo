package com.controllers;

import java.time.LocalDate;
import java.util.List;
// import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.domain.Specification;
// import org.springframework.data.util.Optionals;
// import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.repositories.InventoryRepository;
import com.repositories.WarehouseRepository;
// import com.repositories.WarehouseRepository;
import com.repositories.InventorySpecifications;
// import com.repositories.WarehouseRepository;
import com.models.Inventory;
// import com.models.Warehouse;
import com.models.Warehouse;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class inventoryController {

  // ...

  private final InventoryRepository inventoryRepository;
  private final WarehouseRepository warehouseRepository;

  public inventoryController(InventoryRepository inventoryRepository, WarehouseRepository warehouseRepository) {
    this.inventoryRepository = inventoryRepository;
    this.warehouseRepository = warehouseRepository;
  }

  // @GetMapping("/entityOneDynamicTest")
  // public List<warehouse> dynamicTest() {

  // return
  // this.warehouseRepository.findAll(EntityOneSpecifications.testingDynamics("propertyOneOne"));
  // }

  // @GetMapping("/entityOneDynamicComplex")
  // public List<warehouse> dynamicTestComplex() {
  // Specification<warehouse> spec = Specification.where(null);
  // final String propertyOne = "propertyOneOne";
  // final String propertyTwo = "propertyTwoOne";
  // final String propertyThree = null;
  // if (propertyOne != null && !propertyOne.isEmpty()) {
  // spec = spec.and(EntityOneSpecifications.testingDynamics(propertyOne));
  // }
  // if (propertyTwo != null && !propertyTwo.isEmpty()) {
  // spec = spec.and(EntityOneSpecifications.testingDynamicsComplex(propertyTwo));
  // }

  // return this.warehouseRepository.findAll(spec);
  // }

  // @CrossOrigin(origins = "http://localhost:3000")
  @GetMapping("/inventory")
  public Iterable<Inventory> findAllEntities() {
    return this.inventoryRepository.findAll();
  }

  @GetMapping("/item/{ID}")
  public Optional<Inventory> getEntityById(@PathVariable Integer ID) {

    // Optional<entityOne> entityOne =
    // this.warehouseRepository.findByPropertyOne(propertyOne);

    return this.inventoryRepository.findByid(ID);
  }

  @GetMapping("/item/{ID}/del")
  public void delEntityById(@PathVariable Integer ID) {

    // Optional<entityOne> entityOne =
    // this.warehouseRepository.findByPropertyOne(propertyOne);
    Optional<Inventory> target = this.inventoryRepository.findById(ID);
    if (target.isPresent()) {
      Inventory foundTarget = target.get();
      inventoryRepository.delete(foundTarget);

    }
  }

  @PostMapping("/item/{ID}")
  public Optional<Inventory> modifyEntityById(@PathVariable Integer ID, @RequestBody Inventory entity) {

    Optional<Inventory> target = this.inventoryRepository.findById(ID);
    if (target.isPresent()) {
      // Modify the fields of the entity object
      Inventory foundTarget = target.get();
      String newDescription = entity.getDescription();
      Integer newQuantity = entity.getQuantity();
      LocalDate newDate = entity.getExpiryDate();
      String newLocation = entity.getLocation();
      foundTarget.setDescription(newDescription);
      foundTarget.setQuantity(newQuantity);
      foundTarget.setExpiryDate(newDate);
      foundTarget.setLocation(newLocation);

      inventoryRepository.save(foundTarget);
    }

    return target;
  }

  @PostMapping("/itemTransfer/{ID}/{Target}")
  public Optional<Inventory> moveItem(@PathVariable Integer ID, @PathVariable Integer Destination) {

    Optional<Inventory> target = this.inventoryRepository.findById(ID);
    Optional<Warehouse> targetHouse = this.warehouseRepository.findById(Destination);
    if (target.isPresent()) {
      // Modify the fields of the entity object
      Inventory foundTarget = target.get();
      Warehouse foundDestination = targetHouse.get();
      foundTarget.setWarehouse(foundDestination);

      inventoryRepository.save(foundTarget);
    }

    return target;
  }

  @GetMapping(value = "/inventory/{ID}")
  public Iterable<Inventory> getWareHouseInventory(@PathVariable Integer ID) {
    Optional<Warehouse> target = this.warehouseRepository.findById(ID);
    // Specification<Inventory> spec = Specification.where(null);
    // spec = spec.and(InventorySpecifications.getByWarehouseID(target));

    // if (target.isPresent()) {
    // // Modify the fields of the entity object
    Warehouse foundTarget = target.get();
    Iterable<Inventory> inventoryList = this.inventoryRepository.findAllByWarehouse(foundTarget);

    // }

    return inventoryList;
  }

  @PostMapping(value = "/inventory/{ID}", consumes = { "*/*" })
  public Inventory addOneEntity(@PathVariable Integer ID, @RequestBody Inventory entity) {

    Optional<Warehouse> target = this.warehouseRepository.findById(ID);
    Integer retSum = 0;
    if (target.isPresent()) {
      // Modify the fields of the entity object
      Warehouse foundTarget = target.get();
      entity.setWarehouse(foundTarget);
      inventoryRepository.save(entity);

      retSum = this.warehouseRepository.getQuantitySum(ID);
      foundTarget.setOccupied(retSum);
      warehouseRepository.save(foundTarget);

    }

    return entity;
  }
}