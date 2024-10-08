import ProductCard from './ProductCard';


const productList = [
  {
    image: '/public/images/alienware.jpg',
    name: 'Auriculares Bluetooth',
    description: 'Auriculares inalámbricos con excelente calidad de sonido.',
    price: 50,
  },
  {
    image: '/images/product2.jpg',
    name: 'Smartphone',
    description: 'Smartphone con pantalla OLED y cámara de alta resolución.',
    price: 800,
  },
  {
    image: '/images/product3.jpg',
    name: 'Laptop Gamer',
    description: 'Laptop con procesador potente y tarjeta gráfica de última generación.',
    price: 1200,
  },
  {
    image: '/images/product4.jpg',
    name: 'Mouse Inalámbrico',
    description: 'Mouse inalámbrico ergonómico con gran precisión.',
    price: 25,
  },
  {
    image: '/images/product5.jpg',
    name: 'Smartwatch',
    description: 'Reloj inteligente con monitoreo de salud y notificaciones.',
    price: 150,
  },
  {
    image: '/images/product6.jpg',
    name: 'Teclado Mecánico',
    description: 'Teclado mecánico RGB con switches personalizables.',
    price: 100,
  },
];


const ProductGrid: React.FC = () => {
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
    
      {productList.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
