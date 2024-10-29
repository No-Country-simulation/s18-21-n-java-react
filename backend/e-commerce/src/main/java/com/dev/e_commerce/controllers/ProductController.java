package com.dev.e_commerce.controllers;


import com.dev.e_commerce.dtos.ApiResponseDto;
import com.dev.e_commerce.dtos.request.CategoryRequestDto;
import com.dev.e_commerce.dtos.request.ProductRequestDto;
import com.dev.e_commerce.dtos.response.ProductResponseDTO;

import com.dev.e_commerce.mappers.ProductMapper;
import com.dev.e_commerce.models.Product;
import com.dev.e_commerce.services.interfaces.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("${api.base}/products")


public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductMapper productMapper;

    // Endpoint para listar productos
    @Operation(summary = "Listar productos", description = "Obtiene una lista de productos con paginación")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Productos listados exitosamente"),
            @ApiResponse(responseCode = "400", description = "Solicitud incorrecta")
    })
    @GetMapping
    public ResponseEntity<ApiResponseDto<Product>> listProducts(
            @Parameter(description = "Número de página") @RequestParam(defaultValue = "0") int page,
            @Parameter(description = "Tamaño de la página") @RequestParam(defaultValue = "10") int size) {

        Page<Product> products = this.productService.listProduct(page, size);

        // Aquí puedes calcular el total de productos y las páginas
        long totalItems = productService.countTotalProducts();
        Long totalPages = (long) Math.ceil((double) totalItems / size);

        // Usa 'List<Product>' como tipo genérico
        var response = new ApiResponseDto<Product>(
                true,
                "Productos listados exitosamente.",
                products.getContent(),
                page,
                Math.toIntExact(totalPages),
                totalItems
        );

        return ResponseEntity.ok(response);
    }

    // Endpoint para guardar producto

    @Operation(summary = "Guardar producto", description = "Crea un nuevo producto")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Producto creado exitosamente"),
            @ApiResponse(responseCode = "400", description = "Datos inválidos proporcionados")
    })
    @PostMapping
    public ResponseEntity<ApiResponseDto<ProductResponseDTO>> saveProduct(
            @Validated   @Parameter(description = "Product DTO ") @RequestBody ProductRequestDto productRequestDto) {
       Product produc =  productMapper.toEntity(productRequestDto);
       produc = productService.guardarProducto(produc);
       ProductResponseDTO productResponseDTO = productMapper.toProductResponseDto(produc);
        ApiResponseDto<ProductResponseDTO> response = new ApiResponseDto<>(
                true,
                "Producto creado sactisfactoriamente.",
                productResponseDTO );
                return ResponseEntity.ok(response);

  }

    // Endpoint para modificar producto

    @Operation(summary = "Modificar producto", description = "Actualiza un producto existente por su ID")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Producto modificado exitosamente"),
            @ApiResponse(responseCode = "404", description = "Producto no encontrado")
    })
    @PutMapping("/{idProducto}")
    public ResponseEntity<ApiResponseDto<Void>> updateProduct(
            @Parameter(description = "ID del producto a modificar")   @PathVariable Long idProducto,
            @Validated @RequestBody ProductRequestDto productRequestDto) {
        Optional<ProductResponseDTO> product = productService.buscarProducto(idProducto);
        if(product.isPresent()){
productService.modificarProducto(productRequestDto,idProducto);
            ApiResponseDto<Void> response = new ApiResponseDto<>(
                    true,
                    "Producto modificado exitosamente.",
                    null
            );
            return ResponseEntity.ok(response);
        }else{
            ApiResponseDto<Void> response = new ApiResponseDto<>(
                    false,
                    "Producto NO Modificado",
                    null
            );
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }

    }

    // Endpoint para obtener un producto por ID
    @Operation(summary = "Obtener producto por ID", description = "Obtiene un producto específico por su ID")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Producto encontrado exitosamente"),
            @ApiResponse(responseCode = "404", description = "Producto no encontrado")
    })
    @GetMapping("/{idProducto}")
    public ResponseEntity<ApiResponseDto<ProductResponseDTO>> getProductById(
            @Parameter(description = "ID del producto a buscar", example = "1") @PathVariable long idProducto) {
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
    @Operation(summary = "Eliminar producto", description = "Elimina un producto por su ID")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Producto eliminado exitosamente"),
            @ApiResponse(responseCode = "404", description = "Producto no encontrado")
    })
    @DeleteMapping("/{idProducto}")
    public ResponseEntity<ApiResponseDto<Void>> deleteProduct(
            @Parameter(description = "ID del producto a eliminar", example = "1") @PathVariable Long idProducto) {
        this.productService.EliminarProducto(idProducto);

        ApiResponseDto<Void> response = new ApiResponseDto<>(
                true,
                "Producto eliminado exitosamente.",
                null
        );

        return ResponseEntity.ok(response);
    }

    @PostMapping("/{category}")
    public ResponseEntity<ApiResponseDto<List<ProductResponseDTO>>> filterCategory(@Validated @Parameter(description = "Product DTO ") @RequestBody CategoryRequestDto categoryRequestDto){


        List<ProductResponseDTO> productosFiltrados = productService.filtrarCategoria(categoryRequestDto);


        ApiResponseDto<List<ProductResponseDTO>> response = new ApiResponseDto<>(
                true,
                "Producto encontrado exitosamente.",
                productosFiltrados
        );
        return ResponseEntity.ok(response);

    }

}