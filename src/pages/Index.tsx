import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-acai.jpg";
import { ArrowRight, Star, Clock, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        <img
          src={heroImage}
          alt="Açaí"
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <p className="text-lg md:text-xl mb-4 font-semibold tracking-wide">99% PURO AÇAÍ ESPECIAL</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Quem prova<br />nunca esquece!
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Sem querer influenciar, mas nosso açaí é totalmente artesanal, feito com ingredientes
            naturais e carinho, garantindo aquela sensação de querer aproveitar a vida ao máximo.
          </p>
          <Link to="/cardapio">
            <Button variant="hero" size="xl" className="shadow-glow">
              Ver Cardápio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-elegant transition-smooth border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Qualidade Premium</h3>
                <p className="text-muted-foreground">
                  Utilizamos apenas os melhores ingredientes, selecionados diariamente
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-smooth border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
                <p className="text-muted-foreground">
                  Seu açaí fresquinho em até 30 minutos na sua casa
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-smooth border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Várias Lojas</h3>
                <p className="text-muted-foreground">
                  Encontre a loja mais próxima de você e faça seu pedido
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
