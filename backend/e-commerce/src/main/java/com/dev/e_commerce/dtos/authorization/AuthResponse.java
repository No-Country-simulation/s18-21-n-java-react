package com.dev.e_commerce.dtos.authorization;

import lombok.Builder;

@Builder
public record AuthResponse(
       String jwtToken,
       Long id
) {
}
