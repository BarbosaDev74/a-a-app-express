import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Order = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'acai', name: 'Açaí' },
    { id: 'sorvete', name: 'Sorvetes' },
    { id: 'shake', name: 'Shakes' },
    { id: 'vitamina', name: 'Vitaminas' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gradient">Nosso Cardápio</h1>
        <p className="text-center text-muted-foreground mb-8">
          Escolha seus produtos favoritos e monte seu pedido
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'gradient' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
