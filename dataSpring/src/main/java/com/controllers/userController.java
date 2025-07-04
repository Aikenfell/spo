package com.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.repositories.UserRepository;
import com.models.User;

@RestController
public class userController {

  // ...

  private final UserRepository userRepository;

  public userController(UserRepository userRepository) {
    this.userRepository = userRepository;  
  }

  @GetMapping("/users")
  public Iterable<User> getAllUsers() {
    return this.userRepository.findAll();
  }

  @GetMapping("/userCount")
  public long getUserBase() {
    return this.userRepository.count();
  }

  @PostMapping("/users")
  public User addOneEmployee(@RequestBody User entity) {
    return userRepository.save(entity);
  }
}