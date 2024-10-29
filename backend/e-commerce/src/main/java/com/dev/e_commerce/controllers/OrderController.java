package com.dev.e_commerce.controllers;

import com.dev.e_commerce.dtos.ApiResponseDto;
import com.dev.e_commerce.dtos.request.OrderRequestDto;
import com.dev.e_commerce.dtos.response.OrderResponseDto;
import com.dev.e_commerce.mappers.DetailsMapper;
import com.dev.e_commerce.mappers.OrderMapper;
import com.dev.e_commerce.models.DetailsOrder;
import com.dev.e_commerce.models.Order;
import com.dev.e_commerce.models.Product;
import com.dev.e_commerce.services.interfaces.OrderService;
import com.dev.e_commerce.services.interfaces.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.EntityNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("${api.base}/order")
@Tag(name = "Order Management", description = "Order API")
@Slf4j
public class OrderController {

  @Autowired
  private OrderService orderService;
  @Autowired
  private ProductService productService;
  @Autowired
  private DetailsMapper detailsMapper;
  @Autowired
  private OrderMapper orderMapper;

  @Operation(
          description = "Create a new order",
          summary = "Create a new order",
          responses = {
                  @ApiResponse(
                          responseCode = "200",
                          description = "Order created successfully",
                          content = {
                                  @Content(mediaType = "application/json",
                                          schema = @Schema(implementation = ApiResponseDto.class))
                          })
          }
  )

  @PostMapping
  public ResponseEntity<ApiResponseDto<OrderResponseDto>> createOrder(@RequestBody @Parameter(description = "DTO Order",
          schema = @Schema(implementation = OrderRequestDto.class)) OrderRequestDto orderRequestDto) {

    Order order = orderMapper.toOrderEntity(orderRequestDto);
    Order finalOrder = order;
    List<DetailsOrder> newDetails = orderRequestDto.detailsOrders()
            .stream()
            .map(detailsOrderReq -> {
              DetailsOrder detail = this.detailsMapper.reqToEntity(detailsOrderReq, productService);
              detail.setPrice(detail.getProduct().getPrice());
              detail.setOrder(finalOrder);
              detail.setSeller(detail.getProduct().getSeller());
              return detail;
            })
            .toList();

    order.setDetailsOrders(newDetails);
    order = orderService.createOrder(order);
              // Bajamos el stock de los productos
    Product product= newDetails.stream().map(detail -> detail.getProduct()).findFirst().get();
    int x = newDetails.stream().map(detail -> detail.getQuantity()).reduce(0, Integer::sum);
      product.setStock(product.getStock() - x);
      productService.guardarProducto(product);


    OrderResponseDto responseOrderDto = orderMapper.toOrderResponseDto(order);
    ApiResponseDto<OrderResponseDto> response = new ApiResponseDto<>(
            true,
            "Order created successfully",
            responseOrderDto);
    return ResponseEntity.ok(response);
  }

  @Operation(description = "Get Order By Id",
          summary = "Get Order By Id",
          responses = {
                  @ApiResponse(
                          responseCode = "200",
                          description = "Order retrieved successfully",
                          content = {
                                  @Content(mediaType = "application/json",
                                          schema = @Schema(implementation = ApiResponseDto.class))
                          })

          })
  @GetMapping("/{idOrder}")
  public ResponseEntity<ApiResponseDto<OrderResponseDto>> getOrderById(@PathVariable @Parameter(description = "Get Order by Id", required = true) Long idOrder) {
    try {
      Order order = orderService.getOrderById(idOrder);
      OrderResponseDto responseOrderDto = orderMapper.toOrderResponseDto(order);
      ApiResponseDto<OrderResponseDto> response = new ApiResponseDto<>(true, "Order retrieved successfully", responseOrderDto);
      return ResponseEntity.ok(response);
    } catch (EntityNotFoundException e) {
      ApiResponseDto<OrderResponseDto> errorResponse = new ApiResponseDto<>(false, e.getMessage(), null);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
    }

  }

  @Operation(description = "Get all orders",
          summary = "Get all orders",
          responses = {
                  @ApiResponse(
                          responseCode = "200", description = "Orders retrieved successfully",
                          content = {
                                  @Content(mediaType = "application/json",
                                          schema = @Schema(implementation = ApiResponseDto.class))

                          })
          })


  @GetMapping("/")
  public ResponseEntity<ApiResponseDto<OrderResponseDto>> getAllOrders(
          @Parameter(description = "Página de donde comenzar") @RequestParam(value = "page", defaultValue = "0") int page,
          @Parameter(description = "Cantidad de valores por página") @RequestParam(value = "size", defaultValue = "10") int size) {
    Pageable pageable = PageRequest.of(page, size);
    Page<Order> ordersPage = orderService.getAllOrder(pageable);

    List<OrderResponseDto> orderResponseDtos = ordersPage.stream()
            .map(orderMapper::toOrderResponseDto)
            .collect(Collectors.toList());

    ApiResponseDto<OrderResponseDto> response = new ApiResponseDto<>(
            true,
            "Orders retrieved successfully",
            orderResponseDtos,                // Aquí pasa la lista de OrderResponseDto
            page,                              // Página actual
            ordersPage.getTotalPages(),        // Total de páginas
            ordersPage.getTotalElements()      // Total de elementos
    );

    return ResponseEntity.ok(response);
  }

}
