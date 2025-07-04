package com.repositories;
import com.models.entityOne;

import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public class EntityOneSpecifications {


  public static Specification<entityOne> testingDynamics(String propertyOne) {
    return (root, query, builder) -> {
        
    //   LocalDate date = LocalDate.now().minusYears(2);
    //   return builder.equal(root.get(entityOne.createdAt), date);
      return builder.equal(root.get("propertyOne"), propertyOne);
    };
  }

  public static Specification<entityOne> testingDynamicsComplex(String propertyTwo) {
    return (root, query, builder) -> {

        //   LocalDate date = LocalDate.now().minusYears(2);
    //   return builder.equal(root.get(entityOne.createdAt), date);
      return builder.equal(root.get("propertyTwo"), propertyTwo);
    };
  }

//   public static Specification<Customer> hasSalesOfMoreThan(MonetaryAmount value) {
//     return (root, query, builder) -> {
//       // build query here
//     };
//   }

    // private SearchCriteria criteria;

    // @Override
    // public Predicate toPredicate
    //   (Root<entityOne> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
 
    //     if (criteria.getOperation().equalsIgnoreCase(">")) {
    //         return builder.greaterThanOrEqualTo(
    //           root.<String> get(criteria.getKey()), criteria.getValue().toString());
    //     } 
    //     else if (criteria.getOperation().equalsIgnoreCase("<")) {
    //         return builder.lessThanOrEqualTo(
    //           root.<String> get(criteria.getKey()), criteria.getValue().toString());
    //     } 
    //     else if (criteria.getOperation().equalsIgnoreCase(":")) {
    //         if (root.get(criteria.getKey()).getJavaType() == String.class) {
    //             return builder.like(
    //               root.<String>get(criteria.getKey()), "%" + criteria.getValue() + "%");
    //         } else {
    //             return builder.equal(root.get(criteria.getKey()), criteria.getValue());
    //         }
    //     }
    //     return null;
    // }
}