package com.example.ProyectoEcommece.Service.Interface;


import com.example.ProyectoEcommece.dtos.ProductDTO;
import com.example.ProyectoEcommece.entity.Product;

import java.util.List;

public interface ProductoInterfaces {


     List<Product> listProduct();
    Product guardarProducto(ProductDTO productTO);
    void modificarProducto(long productId, ProductDTO productDTO);
    void EliminarProducto (long productId);
}
