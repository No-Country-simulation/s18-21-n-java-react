package com.dev.e_commerce.services.implement;


import com.dev.e_commerce.dtos.request.CategoryRequestDto;
import com.dev.e_commerce.dtos.request.ProductRequestDto;
import com.dev.e_commerce.dtos.response.ProductResponseDTO;
import com.dev.e_commerce.exceptions.ApplicationException;
import com.dev.e_commerce.mappers.ProductMapper;
import com.dev.e_commerce.models.Category;
import com.dev.e_commerce.models.Product;
import com.dev.e_commerce.repositories.ProductRepository;
import com.dev.e_commerce.services.interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
public class ProductInterfacesImpl implements ProductService {

    // inyeccion
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ProductMapper productMapper;



    // LISTADO DE TODOS LOS PRODUCTOS

    // LISTADO DE PRODUCTOS PAGINADOS
    @Override
    public Page<Product> listProduct(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Product> productPage = productRepository.findAll(pageable);
        return productPage;
    }

    // GUARDAR PRODUCTO
    @Override
    public Product guardarProducto(Product product) {
        return this.productRepository.save(product);
    }




    // BUSCAR PRODUCTO POR ID
    @Override
    public Optional<ProductResponseDTO> buscarProducto(long productId) {
Optional<Product> product = productRepository.findById(productId);
if(product.isEmpty()){
    throw new ApplicationException("Product not found");
}
        return Optional.ofNullable(productMapper.toProductResponseDto(product.get()));
    }


//MODIFICAR PRODUCTO
    @Override
    public void modificarProducto(ProductRequestDto productRequestDto, long productId) {
       Product product = productMapper.toEntity(productRequestDto);
        Optional<Product> response= productRepository.findById(productId);
        if(response.isPresent()){
            product.setId(productId);
            productRepository.save(product);
        }else {
             throw new ApplicationException("Product not found");
        }
    }

    // ELIMINAR PRODUCTO
    @Override
    public void EliminarProducto (long productId){
        if (productRepository.existsById(productId)) {
            this.productRepository.deleteById(productId);
        }
        System.out.println("producto NO eliminado NO se encontro"); // AQUI ESTARIAN EXCEPCIONES

    }

    public long countTotalProducts() {
        // Este método cuenta el número total de productos en la base de datos
        return productRepository.count();
    }

    @Override
    public List<ProductResponseDTO> filtrarCategoria(CategoryRequestDto categoryRequestDto) {
        Category category;

        category = Category.valueOf(categoryRequestDto.category().toUpperCase());


        List<Product> productos = productRepository.findByCategory(category);
        return productos.stream()
                .map(product -> productMapper.toProductResponseDto(product))
                .collect(Collectors.toList());
    }


}





