package com.dev.e_commerce.dtos.authorization;

import lombok.Builder;
import lombok.Data;

@Builder
public record AuthResponse(
       String jwtToken
) {
}
