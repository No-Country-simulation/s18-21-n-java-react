package com.dev.e_commerce.dtos.response;

import lombok.Builder;

@Builder
public record AuthResponse(
       String jwtToken
) {
}
