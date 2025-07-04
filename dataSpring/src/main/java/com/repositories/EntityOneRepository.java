package com.repositories;
import com.models.entityOne;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface EntityOneRepository extends JpaRepository<entityOne, Integer>, JpaSpecificationExecutor<entityOne> {
    Optional<entityOne> findByPropertyOne(String propertyOne);

    List<entityOne> findAll();

    // List<entityOne> findAllByPropertyOnes(){
    //         return this.findAll(EntityOneSpecifications.testingDynamics("lulz"));
    // };

    

//   Optionals findByPropertyOne(entityOne propertyOne);


}