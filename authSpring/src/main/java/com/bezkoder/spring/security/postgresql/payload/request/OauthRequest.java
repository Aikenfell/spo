package com.bezkoder.spring.security.postgresql.payload.request;

import jakarta.validation.constraints.NotBlank;

public class OauthRequest {
  @NotBlank
  private String email;

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

}
