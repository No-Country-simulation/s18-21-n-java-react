package com.dev.e_commerce.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class SwaggerConfig {
  @Bean
  public OpenAPI defineOpenApi(){
    String schemeName = "bearerAuth";
    String bearerFormat = "JWT";
    String scheme = "bearer";

    Contact myContact = new Contact()
            .name("No-Country s18-21-n-java-react")
            .email("machicadogomezalexander@gmail.com");

    Server development = new Server()
            .url("http://localhost:8080")
            .description("Development server");

    Server production = new Server()
            .url("https://deploy-smart-store.onrender.com")
            .description("Production server");

    Info information = new Info()
            .title("SmartStore")
            .description("This API expose endpoints to manage SmartStore.")
            .version("1.0")
            .license(new License().name("SmartStore v1.0").url("http://"))
            .contact(myContact);

    SecurityRequirement securityItem = new SecurityRequirement()
            .addList(schemeName);
    SecurityScheme securityScheme = new SecurityScheme()
            .name(schemeName)
            .type(SecurityScheme.Type.HTTP)
            .bearerFormat(bearerFormat)
            .in(SecurityScheme.In.HEADER)
            .scheme(scheme);
    Components components = new Components()
            .addSecuritySchemes(scheme, securityScheme);

    return new OpenAPI()
            .info(information)
            .servers(List.of(development));
  }

}
