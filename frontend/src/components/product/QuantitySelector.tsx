"use client"; // Asegúrate de que este componente se ejecute en el lado del cliente

import React, { useState } from 'react';

// Definición de las propiedades que recibe el componente
interface QuantitySelectorProps {
  initialQuantity?: number; // Cantidad inicial
  onQuantityChange: (newQuantity: number) => void; // Función callback para manejar cambios
}

// Componente de selección de cantidad
const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  initialQuantity = 1,
  onQuantityChange, 
}) => {
  // Estado interno para la cantidad actual
  const [quantity, setQuantity] = useState(initialQuantity);

  // Función para aumentar la cantidad
  const increaseQuantity = () => {
    const newQuantity = quantity + 1; 
    setQuantity(newQuantity); 
    onQuantityChange(newQuantity); 
  };

  // Función para disminuir la cantidad
  const decreaseQuantity = () => {
    if (quantity > 1) { // Asegúrate de que la cantidad no sea menor que 1
      const newQuantity = quantity - 1; 
      setQuantity(newQuantity); 
      onQuantityChange(newQuantity); 
    }
  };

  return (
    <div className="flex items-center mt-4">
      <button 
        className="px-2 py-1 border rounded" 
        onClick={decreaseQuantity}
        disabled={quantity <= 1} // Deshabilitar el botón si la cantidad es 1
      >
        -
      </button>
      <span className="mx-2">{quantity}</span> {/* Mostrar la cantidad actual */}
      <button 
        className="px-2 py-1 border rounded" 
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
