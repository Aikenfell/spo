package com.repositories;
import com.models.Inventory;
import com.models.Warehouse;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Integer>, JpaSpecificationExecutor<Inventory> {
    Optional<Inventory> findByid(Integer ID);


    List<Inventory> findAll();
    
    List<Inventory> findAllByWarehouse(Warehouse warehouse);
    

    // List<entityOne> findAllByPropertyOnes(){
    //         return this.findAll(EntityOneSpecifications.testingDynamics("lulz"));
    // };

    

//   Optionals findByPropertyOne(entityOne propertyOne);


}