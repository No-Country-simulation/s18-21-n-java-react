package com.dev.e_commerce.config;

import com.dev.e_commerce.config.token.JwtAuthFilter;
import com.dev.e_commerce.dtos.ApiResponseDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

  private final UserDetailsService userDetailsService;
  private final JwtAuthFilter jwtAuthFilter;

  @Autowired
  public SecurityConfig(UserDetailsService userDetailsService, JwtAuthFilter jwtAuthFilter) {
    this.jwtAuthFilter = jwtAuthFilter;
    this.userDetailsService = userDetailsService;
  }

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    return
            http
                    .csrf(AbstractHttpConfigurer::disable)
                    .cors(Customizer.withDefaults())
                    .authorizeHttpRequests(authRequest -> authRequest
                            .requestMatchers("/swagger-ui/**",
                                    "/v3/api-docs/**",
                                    "/api/v1/auth/**",
                                    "/api/v1/user/register",
                                    "/api/v1/user/verifyCode/**",
                                    "api/v1/**"
                            ).permitAll()
                            .requestMatchers(HttpMethod.POST, "/api/v1/**order/**").authenticated()
                            .requestMatchers(HttpMethod.POST, "api/v1/**").permitAll()
                            .requestMatchers(HttpMethod.GET, "/**").permitAll()
                            .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                            .requestMatchers(HttpMethod.PATCH, "/**").permitAll()
                            .requestMatchers(HttpMethod.PUT, "/**").permitAll()
                            .requestMatchers(HttpMethod.DELETE, "/**").permitAll()
                            .anyRequest().authenticated())
                    .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                    .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                    .userDetailsService(userDetailsService)
                    .exceptionHandling(custom -> custom
                            .authenticationEntryPoint(authenticationEntryPoint())
                            .accessDeniedHandler(accessDeniedHandler()))
                    .build();
  }

  /**
   * This method customize the message for unauthorized access.
   *
   * @return AuthenticationEntryPoint
   */
  @Bean
  public AuthenticationEntryPoint authenticationEntryPoint() {
    return (request, response, authException) -> {
      response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
      response.getWriter().write(convertToJson(
              new ApiResponseDto<>(
                      false,
                      "Unauthorized: Please login to access this resource.",
                      request.getPathInfo())));
    };
  }

  /**
   * This method handled the logic associated with exceptions for insufficient permissions.
   *
   * @return AccessDeniedHandler
   */
  @Bean
  public AccessDeniedHandler accessDeniedHandler() {
    return (request, response, accessDeniedException) -> {
      response.setStatus(HttpServletResponse.SC_FORBIDDEN);
      response.getWriter().write(convertToJson(
              new ApiResponseDto<>(
                      false,
                      "Access Denied: You do not have permission to access this resource.",
                      request.getPathInfo())));

    };
  }

  private String convertToJson(Object object) throws JsonProcessingException {
    if (object == null) {
      return null;
    }
    ObjectMapper mapper = new ObjectMapper();
    return mapper.writeValueAsString(object);
  }


}
