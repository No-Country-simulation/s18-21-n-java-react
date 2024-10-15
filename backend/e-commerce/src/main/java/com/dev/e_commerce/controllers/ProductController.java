package com.dev.e_commerce.controllers;


import com.dev.e_commerce.dtos.ProductDTO;
import com.dev.e_commerce.models.Product;
import com.dev.e_commerce.services.interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    // CONTROLADOR LISTADO PRODUCTO
    @GetMapping("/listado/productos")
    public List<Product> listProducto(){

        return this.productService.listProduct();
    }
    // CONTROLADOR GUARDAR  PRODUCTO
    @PostMapping("/Guardar/{producto}")
    public ResponseEntity<Product> guardarProducto(@RequestBody ProductDTO productDTO){
        this.productService.guardarProducto(productDTO);
        return ResponseEntity.ok().build();

    }
// CONTROLADOR MODIFICAR PRODUCTO
    @PostMapping("/productos/{idProducto}")
    public ResponseEntity<Product> modificarProducto(@PathVariable Long idProducto, @RequestBody ProductDTO productDTO){
        this.productService.modificarProducto(idProducto, productDTO);
        return ResponseEntity.ok().build();

    }

    // CONTROLADOR ELIMINAR PRODUCTO
    @DeleteMapping("/productos/{idProducto}")
    public ResponseEntity<Product> eliminarProducto(@PathVariable Long idProducto){
        this.productService.EliminarProducto(idProducto);
        return ResponseEntity.ok().build();

    }





}
