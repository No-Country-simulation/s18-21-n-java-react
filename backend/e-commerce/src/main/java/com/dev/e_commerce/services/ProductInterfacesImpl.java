package com.example.ProyectoEcommece.Service;

import com.example.ProyectoEcommece.Mappers.ProductMapper;
import com.example.ProyectoEcommece.Repositories.ProductRepository;
import com.example.ProyectoEcommece.Service.Interface.ProductoInterfaces;
import com.example.ProyectoEcommece.dtos.ProductDTO;
import com.example.ProyectoEcommece.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductInterfacesImpl implements ProductoInterfaces {

    // inyeccion
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ProductMapper productMapper;



    // LISTADO DE TODOS LOS PRODUCTOS

    @Override
    public List<Product> listProduct() {
        return productRepository.findAll();
    }

    // GUARDAR PRODUCTO
    @Override
    public Product guardarProducto(ProductDTO productTO) {
        return this.productRepository.save(productMapper.toEntity(productTO));
    }

    // MODIFICAR PRODUCTO
    @Override
    public void modificarProducto(long productId, ProductDTO productDTO) {

        if (productRepository.existsById(productId)) {
          this.productRepository.save(productMapper.toEntity(productDTO));
        }
        System.out.println("Producto NO encontrado a Modificar "); // AQUI ESTARIAN EXCEPCIONES

    }

    // ELIMINAR PRODUCTO
    @Override
    public void EliminarProducto (long productId){
        if (productRepository.existsById(productId)) {
            this.productRepository.deleteById(productId);
        }
        System.out.println("producto NO eliminado NO se encontro"); // AQUI ESTARIAN EXCEPCIONES

    }

}





