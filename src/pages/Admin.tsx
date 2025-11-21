import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';

const Admin = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalUsers: 0,
  });
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchStats();
      fetchOrders();
    }
  }, [user]);

  const fetchStats = async () => {
    const { data: ordersData } = await supabase.from('orders').select('total');
    const { data: usersData } = await supabase.from('profiles').select('id');

    const totalRevenue = ordersData?.reduce((sum, order) => sum + order.total, 0) || 0;
    const totalOrders = ordersData?.length || 0;
    const totalUsers = usersData?.length || 0;

    setStats({ totalRevenue, totalOrders, totalUsers });
  };

  const fetchOrders = async () => {
    const { data } = await supabase
      .from('orders')
      .select('*, order_items(*), profiles(name)')
      .order('created_at', { ascending: false })
      .limit(10);

    if (data) setOrders(data);
  };

  const updateOrderStatus = async (orderId: string, status: string) => {
    await supabase.from('orders').update({ status }).eq('id', orderId);
    fetchOrders();
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Carregando...</div>;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gradient">Painel Admin</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-primary text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Faturamento Total
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">R$ {stats.totalRevenue.toFixed(2)}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-hero text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Total de Pedidos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.totalOrders}</p>
            </CardContent>
          </Card>

          <Card className="bg-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Usuários
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.totalUsers}</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Pedidos Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="font-semibold">Pedido #{order.id.slice(0, 8)}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(order.created_at).toLocaleDateString('pt-BR')}
                        </p>
                        <p className="text-sm mt-1">Cliente: {order.profiles?.name || 'N/A'}</p>
                        <p className="text-sm">Endereço: {order.delivery_address}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">R$ {order.total.toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground mt-1">Status: {order.status}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateOrderStatus(order.id, 'preparing')}
                      >
                        Preparando
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateOrderStatus(order.id, 'delivering')}
                      >
                        Enviado
                      </Button>
                      <Button
                        size="sm"
                        variant="gradient"
                        onClick={() => updateOrderStatus(order.id, 'delivered')}
                      >
                        Entregue
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
