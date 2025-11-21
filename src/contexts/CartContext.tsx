import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '@/types/product';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, selectedSize?: string, selectedToppings?: string[]) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (
    product: Product,
    quantity: number,
    selectedSize?: string,
    selectedToppings?: string[]
  ) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === selectedSize &&
          JSON.stringify(item.selectedToppings) === JSON.stringify(selectedToppings)
      );

      let itemPrice = product.price;
      if (selectedSize && product.sizes) {
        const sizeOption = product.sizes.find((s) => s.size === selectedSize);
        if (sizeOption) itemPrice = sizeOption.price;
      }

      const totalPrice = itemPrice * quantity;

      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id &&
          item.selectedSize === selectedSize &&
          JSON.stringify(item.selectedToppings) === JSON.stringify(selectedToppings)
            ? { ...item, quantity: item.quantity + quantity, totalPrice: (item.quantity + quantity) * itemPrice }
            : item
        );
      }

      return [...prevCart, { product, quantity, selectedSize, selectedToppings, totalPrice }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.product.id === productId) {
          let itemPrice = item.product.price;
          if (item.selectedSize && item.product.sizes) {
            const sizeOption = item.product.sizes.find((s) => s.size === item.selectedSize);
            if (sizeOption) itemPrice = sizeOption.price;
          }
          return { ...item, quantity, totalPrice: itemPrice * quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
