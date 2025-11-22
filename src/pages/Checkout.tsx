import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ShoppingBag } from 'lucide-react';
import type { CartItem } from '@/types/product';

const generateWhatsAppMessage = (name: string, phone: string, cart: CartItem[], total: number) => {
  let message = '🍦 PEDIDO PARA RETIRADA - açaí 🍨\n\n';
  message += `👤 Cliente: ${name}\n`;
  message += `📱 Telefone: ${phone}\n\n`;
  message += '📋 ITENS DO PEDIDO:\n';
  message += '━━━━━━━━━━━━━━━━━━━━\n\n';

  cart.forEach((item) => {
    message += `▪ ${item.quantity}x ${item.product.name}\n`;
    message += `   R$ ${item.product.price.toFixed(2)} cada\n`;
    message += `   Subtotal: R$ ${item.totalPrice.toFixed(2)}\n\n`;
  });

  message += '━━━━━━━━━━━━━━━━━━━━\n';
  message += `💰 TOTAL: R$ ${total.toFixed(2)}\n\n`;
  message += '🏪 RETIRADA NO LOCAL';

  return message;
};

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (cart.length === 0) {
    navigate('/cardapio');
    return null;
  }

  const handleSubmit = async () => {
    if (!customerName.trim()) {
      toast({
        title: 'Erro',
        description: 'Por favor, informe seu nome',
        variant: 'destructive',
      });
      return;
    }

    if (!customerPhone.trim()) {
      toast({
        title: 'Erro',
        description: 'Por favor, informe seu telefone',
        variant: 'destructive',
      });
      return;
    }

    setSubmitting(true);

    try {
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          total: totalPrice,
          customer_name: customerName,
          customer_phone: customerPhone,
          status: 'pending',
        })
        .select()
        .single();

      if (orderError) throw orderError;

      const orderItems = cart.map((item) => ({
        order_id: order.id,
        product_name: item.product.name,
        quantity: item.quantity,
        price: item.totalPrice,
      }));

      const { error: itemsError } = await supabase.from('order_items').insert(orderItems);

      if (itemsError) throw itemsError;

      // Gerar mensagem para WhatsApp
      const whatsappMessage = generateWhatsAppMessage(customerName, customerPhone, cart, totalPrice);
      const whatsappNumber = '5561999999999'; // SUBSTITUA pelo número do WhatsApp da loja
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

      toast({
        title: 'Pedido realizado!',
        description: 'Redirecionando para WhatsApp...',
      });

      clearCart();
      
      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Não foi possível realizar o pedido',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gradient">Finalizar Pedido</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Suas Informações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Nome Completo *</Label>
                <Input
                  id="name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                <Input
                  id="phone"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="(61) 91234-5678"
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Resumo do Pedido
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cart.map((item) => (
                <div key={`${item.product.id}-${item.selectedSize}`} className="flex justify-between text-sm">
                  <span>
                    {item.quantity}x {item.product.name}
                    {item.selectedSize && ` (${item.selectedSize})`}
                  </span>
                  <span className="font-semibold">R$ {item.totalPrice.toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-primary">R$ {totalPrice.toFixed(2)}</span>
              </div>

              <Button
                onClick={handleSubmit}
                disabled={submitting}
                variant="gradient"
                className="w-full"
                size="lg"
              >
                {submitting ? 'Processando...' : 'Confirmar Pedido'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
