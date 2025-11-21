import { Product } from '@/types/product';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]?.size || '');
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedToppings);
    toast({
      title: 'Adicionado ao carrinho!',
      description: `${quantity}x ${product.name}`,
    });
    setOpen(false);
    setQuantity(1);
    setSelectedToppings([]);
  };

  const getCurrentPrice = () => {
    if (selectedSize && product.sizes) {
      const size = product.sizes.find((s) => s.size === selectedSize);
      return size?.price || product.price;
    }
    return product.price;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Card className="overflow-hidden hover:shadow-glow transition-smooth group">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-2">{product.name}</h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              R$ {product.price.toFixed(2)}
            </span>
            <DialogTrigger asChild>
              <Button variant="gradient" size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Adicionar
              </Button>
            </DialogTrigger>
          </div>
        </CardContent>
      </Card>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <p className="text-muted-foreground">{product.description}</p>

          {product.sizes && (
            <div>
              <Label>Tamanho</Label>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                {product.sizes.map((size) => (
                  <div key={size.size} className="flex items-center space-x-2">
                    <RadioGroupItem value={size.size} id={size.size} />
                    <Label htmlFor={size.size} className="flex-1 cursor-pointer">
                      {size.size} - R$ {size.price.toFixed(2)}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {product.toppings && (
            <div>
              <Label>Adicionais</Label>
              <div className="space-y-2 mt-2">
                {product.toppings.map((topping) => (
                  <div key={topping} className="flex items-center space-x-2">
                    <Checkbox
                      id={topping}
                      checked={selectedToppings.includes(topping)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedToppings([...selectedToppings, topping]);
                        } else {
                          setSelectedToppings(selectedToppings.filter((t) => t !== topping));
                        }
                      }}
                    />
                    <Label htmlFor={topping} className="cursor-pointer">
                      {topping}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <Label>Quantidade</Label>
            <div className="flex items-center gap-2 mt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </Button>
              <span className="w-12 text-center font-semibold">{quantity}</span>
              <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                +
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <span className="text-2xl font-bold text-primary">
              R$ {(getCurrentPrice() * quantity).toFixed(2)}
            </span>
            <Button variant="gradient" onClick={handleAddToCart}>
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
