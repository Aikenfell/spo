package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

	  @CrossOrigin(origins = "*")
@RestController
@SpringBootApplication
@EntityScan(basePackages = "com.models")
public class SkillstormProject {

// @Bean
//     public WebMvcConfigurer corsConfigurer() {
//         return new WebMvcConfigurer() {
//             @Override
//             public void addCorsMappings(CorsRegistry registry) {
//                 registry.addMapping("/**").allowedOrigins("*");
//             }
//         };
//     }

	@RequestMapping("/")
	String home() {
		return "Hello World from Java!";
	}


	public static void main(String[] args) {
		SpringApplication.run(SkillstormProject.class, args);
	}

}