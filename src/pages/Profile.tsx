import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Profile = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gradient">Perfil</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Informações</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Esta página requer autenticação para funcionar corretamente.
            </p>
            <Link to="/cardapio">
              <Button variant="gradient">Ver Cardápio</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
