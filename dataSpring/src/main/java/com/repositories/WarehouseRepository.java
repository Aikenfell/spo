package com.repositories;
import com.models.Warehouse;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface WarehouseRepository extends JpaRepository<Warehouse, Integer>, JpaSpecificationExecutor<Warehouse> {
    Optional<Warehouse> findByName(String propertyOne);

    List<Warehouse> findAll();


    @Query(value = "SELECT sum(quantity) from inventory where warehouse=:warehouse", nativeQuery = true)
    Integer getQuantitySum(@Param("warehouse") Integer warehouse);    
    // List<entityOne> findAllByPropertyOnes(){
    //         return this.findAll(EntityOneSpecifications.testingDynamics("lulz"));
    // };

    

//   Optionals findByPropertyOne(entityOne propertyOne);


}