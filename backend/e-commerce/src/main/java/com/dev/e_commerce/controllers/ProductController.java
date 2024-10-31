package com.dev.e_commerce.controllers;


import com.dev.e_commerce.dtos.ApiResponseDto;
import com.dev.e_commerce.dtos.request.ProductRequestDto;
import com.dev.e_commerce.dtos.response.ProductResponseDTO;
import com.dev.e_commerce.mappers.ProductMapper;
import com.dev.e_commerce.models.Product;
import com.dev.e_commerce.services.interfaces.CloudinaryService;
import com.dev.e_commerce.services.interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("${api.base}/products")
public class ProductController {

  @Autowired
  private ProductService productService;

  @Autowired
  private ProductMapper productMapper;

  @Autowired
  private CloudinaryService cloudinaryService;

  // Endpoint para listar productos

  @GetMapping
  public ResponseEntity<ApiResponseDto<ProductResponseDTO>> listProducts(
          @RequestParam(defaultValue = "0") int page,
          @RequestParam(defaultValue = "10") int size) {

    Page<Product> products = this.productService.listProduct(page, size);

    // Usa 'List<Product>' como tipo genérico
    var response = new ApiResponseDto<ProductResponseDTO>(
            true,
            "Productos listados exitosamente.",
            products.getContent().stream().map(productMapper::toProductResponseDto).toList(),
            products.getNumber(),
            products.getTotalPages(),
            products.getTotalElements()
    );

    return ResponseEntity.ok(response);
  }

  // Endpoint para guardar producto
  @PostMapping(consumes = "multipart/form-data")
  @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Form-data")
  public ResponseEntity<ApiResponseDto<ProductResponseDTO>> saveProduct(
          @Validated @ModelAttribute ProductRequestDto productRequestDto) {
    Product product = productMapper.toEntity(productRequestDto, cloudinaryService);
    System.out.println("creo el producto*************************************************");
    product = productService.guardarProducto(product);
    System.out.println("guardo el producto**************************************");
    ProductResponseDTO productResponseDTO = productMapper.toProductResponseDto(product);
    ApiResponseDto<ProductResponseDTO> response = new ApiResponseDto<>(
            true,
            "Producto creado satisfactoriamente.",
            productResponseDTO);
    return ResponseEntity.ok(response);

  }

  // Endpoint para modificar producto
  @PutMapping("/{idProducto}")
  public ResponseEntity<ApiResponseDto<Void>> updateProduct(
          @PathVariable Long idProducto,
          @Validated @RequestBody ProductRequestDto productRequestDto) {
    Optional<ProductResponseDTO> product = productService.buscarProducto(idProducto);
    if (product.isPresent()) {
      productService.modificarProducto(productRequestDto, idProducto);
      ApiResponseDto<Void> response = new ApiResponseDto<>(
              true,
              "Producto modificado exitosamente.",
              null
      );
      return ResponseEntity.ok(response);
    } else {
      ApiResponseDto<Void> response = new ApiResponseDto<>(
              false,
              "Producto NO Modificado",
              null
      );
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

  }

  @GetMapping("/{idProducto}")
  public ResponseEntity<ApiResponseDto<ProductResponseDTO>> getProductById(@PathVariable long idProducto) {
    Optional<ProductResponseDTO> product = productService.buscarProducto(idProducto);

    if (product.isPresent()) {
      ProductResponseDTO productResponseDTO = product.get();
      ApiResponseDto<ProductResponseDTO> response = new ApiResponseDto<>(
              true,
              "Producto encontrado exitosamente.",
              productResponseDTO
      );
      return ResponseEntity.ok(response);
    } else {
      ApiResponseDto<ProductResponseDTO> response = new ApiResponseDto<>(
              false,
              "Producto no encontrado.",
              null
      );
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }
  }

  // Endpoint para eliminar producto
  @DeleteMapping("/{idProducto}")
  public ResponseEntity<ApiResponseDto<Void>> deleteProduct(@PathVariable Long idProducto) {
    this.productService.EliminarProducto(idProducto);

    ApiResponseDto<Void> response = new ApiResponseDto<>(
            true,
            "Producto eliminado exitosamente.",
            null
    );

    return ResponseEntity.ok(response);
  }
}