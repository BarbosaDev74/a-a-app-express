export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'acai' | 'sorvete' | 'shake' | 'vitamina' | 'adicional';
  image: string;
  sizes?: {
    size: string;
    price: number;
  }[];
  toppings?: string[];
  available: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedToppings?: string[];
  totalPrice: number;
}
