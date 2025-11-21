import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gradient">Sobre Nós</h1>

        <Card className="mb-8">
          <CardContent className="pt-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary">Nossa História</h2>
            <p className="text-muted-foreground leading-relaxed">
              O Açaí Artesanal nasceu da paixão por oferecer o melhor açaí do Brasil, feito de forma
              artesanal e com ingredientes 100% naturais. Nossa missão é proporcionar uma experiência
              única e saudável para nossos clientes.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary">Nossos Valores</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Qualidade premium em todos os produtos</li>
              <li>Ingredientes 100% naturais e veganos</li>
              <li>Fabricação própria e artesanal</li>
              <li>Compromisso com a saúde e bem-estar</li>
              <li>Sustentabilidade e respeito ao meio ambiente</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary">Por que escolher o Açaí Artesanal?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Trabalhamos com açaí 99% puro, sem conservantes ou produtos químicos. Cada tigela é
              preparada com carinho e atenção aos detalhes, garantindo a melhor experiência para
              você. Nosso açaí é vegano, livre de contaminação e produzido com os mais altos padrões
              de qualidade.
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default About;
