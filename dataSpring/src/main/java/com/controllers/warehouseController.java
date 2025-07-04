package com.controllers;

// import java.util.List;
import java.util.Optional;

// import org.springframework.data.jpa.domain.Specification;
// import org.springframework.data.util.Optionals;
// import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.repositories.WarehouseRepository;
// import com.repositories.EntityOneSpecifications;
// import com.repositories.WarehouseRepository;
import com.models.Warehouse;

  @CrossOrigin(origins = "*")
@RestController
public class warehouseController {

  // ...

  private final WarehouseRepository warehouseRepository;

  public warehouseController(WarehouseRepository warehouseRepository) {
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

  @GetMapping("/warehouses")
  public Iterable<Warehouse> findAllEntities() {
    return this.warehouseRepository.findAll();
  }

  @GetMapping("/warehouse/{ID}")
  public Optional<Warehouse> getEntityById(@PathVariable Integer ID) {
    Optional<Warehouse> target = this.warehouseRepository.findById(ID);
    Integer retSum = 0;
        if (target.isPresent()) {
          Warehouse foundTarget = target.get();
          retSum = this.warehouseRepository.getQuantitySum(ID);
          foundTarget.setOccupied(retSum);
          warehouseRepository.save(foundTarget);
        }

    // Optional<entityOne> entityOne =
    // this.warehouseRepository.findByPropertyOne(propertyOne);

    return this.warehouseRepository.findById(ID);
  }

  @GetMapping("/warehouse/{ID}/del")
  public void delEntityById(@PathVariable Integer ID) {
    Optional<Warehouse> target = this.warehouseRepository.findById(ID);
        if (target.isPresent()) {
          Warehouse foundTarget = target.get();
          warehouseRepository.delete(foundTarget);
        }
  }

  @GetMapping("/warehouseNum/{ID}")
  public Integer getInventorySum(@PathVariable Integer ID) {
    Optional<Warehouse> target = this.warehouseRepository.findById(ID);
    Integer retSum = 0;
        if (target.isPresent()) {
          Warehouse foundTarget = target.get();
          retSum = this.warehouseRepository.getQuantitySum(ID);
          foundTarget.setOccupied(retSum);
          warehouseRepository.save(foundTarget);
        }
    // Optional<entityOne> entityOne =
    // this.warehouseRepository.findByPropertyOne(propertyOne);

    return retSum;
  }




  


  @PostMapping(value = "/warehouse/{ID}", consumes = { "*/*" })
  public Optional<Warehouse> modifyWareHouseByID(@PathVariable Integer ID, @RequestBody Warehouse entity) {
    Optional<Warehouse> target = this.warehouseRepository.findById(ID);
    // Optional<entityOne> entityOne =
    // this.warehouseRepository.findByPropertyOne(propertyOne);
    if (target.isPresent()) {
      // Modify the fields of the entity object
      Warehouse foundTarget = target.get();
      String newLocation = entity.getLocation();
      String newName = entity.getName();
      Integer newLimit = entity.getLimitWarning();
      foundTarget.setLocation(newLocation);
      foundTarget.setName(newName);
      foundTarget.setLimitWarning(newLimit);

      // Save the entity
      warehouseRepository.save(foundTarget);
    }

    return target;
  }

 @PostMapping(value = "/warehouse", consumes = { "*/*" })
  public Warehouse addOneEntity(@RequestBody Warehouse entity) {
    return warehouseRepository.save(entity);
  }
}