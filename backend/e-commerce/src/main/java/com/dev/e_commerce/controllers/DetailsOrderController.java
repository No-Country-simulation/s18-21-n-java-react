package com.dev.e_commerce.controllers;

import com.dev.e_commerce.dtos.ApiResponseDto;
import com.dev.e_commerce.dtos.OnCreate;
import com.dev.e_commerce.dtos.OnUpdate;
import com.dev.e_commerce.dtos.request.DetailsOrderReq;
import com.dev.e_commerce.dtos.response.DetailsOrderRes;
import com.dev.e_commerce.mappers.DetailsMapper;
import com.dev.e_commerce.models.DetailsOrder;
import com.dev.e_commerce.services.interfaces.DetailsService;
import com.dev.e_commerce.services.interfaces.OrderService;
import com.dev.e_commerce.services.interfaces.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping("${api.base}/details")
@RequiredArgsConstructor
@Tag(name = "Details Management", description = "Details order controller")
public class DetailsOrderController {

  private final DetailsService detailsService;
  private final ProductService productService;
  private final DetailsMapper detailsMapper;

  @Operation(summary = "Create a new detail order")
  @PostMapping
  public ResponseEntity<?> create(
          @RequestBody
          @Validated(OnCreate.class)
          @Parameter(description = "DTO details order request")
          DetailsOrderReq request) {
    DetailsOrder newDetail = this.detailsMapper.reqToEntity(request, productService);
    newDetail = this.detailsService.save(newDetail);
    var response = new ApiResponseDto<DetailsOrderRes>(
            true,
            "Detail created successfully",
            this.detailsMapper.entityToRes(newDetail));
    return ResponseEntity.status(HttpStatus.CREATED)
            .body(response);
  }

  @Operation(summary = "Get detail by Id")
  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable
                                   @Parameter(description = "Get detail by Id", required = true)
                                   Long id) {

    DetailsOrder currentDetail = this.detailsService.findById(id);
    var response = new ApiResponseDto<DetailsOrderRes>(
            true,
            "Detail found successfully",
            this.detailsMapper.entityToRes(currentDetail));
    return ResponseEntity.ok(response);
  }

  @Operation(summary = "Get all Details order")
  @GetMapping
  public ResponseEntity<?> getAll() {
    List<DetailsOrderRes> details = StreamSupport.stream(this.detailsService.findAll().spliterator(), false)
            .map(this.detailsMapper::entityToRes)
            .toList();
    var response = new ApiResponseDto<List<DetailsOrderRes>>(
            true,
            "Details found successfully",
            details);
    return ResponseEntity.ok(response);
  }

  @Operation(summary = "Update Detail order")
  @PutMapping("/{id}")
  public ResponseEntity<?> updateById(
          @Parameter(required = true, description = "Details order id")
          Long id,
          @Parameter(description = "All fields are optional")
          @RequestBody @Validated(OnUpdate.class) DetailsOrderReq request) {

    DetailsOrder updated = this.detailsMapper.reqToEntity(request, productService);
    updated = this.detailsService.updateById(id, updated);
    var response = new ApiResponseDto<DetailsOrderRes>(
            true,
            "Detail updated successfully",
            this.detailsMapper.entityToRes(updated));
    return ResponseEntity.ok(response);
  }

  @Operation(summary = "Delete Details order by id")
  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(
          @Parameter(required = true, description = "Details order id")
          Long id
  ) {
    this.detailsService.deleteById(id);
    var response = new ApiResponseDto<DetailsOrderRes>(
            true,
            "Detail deleted successfully",
            null);
    return ResponseEntity.ok(response);
  }
}
