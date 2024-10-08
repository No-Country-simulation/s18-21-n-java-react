import React from "react";
import ProductGrid from "../components/ProductGrid"; 

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-center my-8">Nuestros Productos</h1>
      <ProductGrid />
    </div>
  );
}
