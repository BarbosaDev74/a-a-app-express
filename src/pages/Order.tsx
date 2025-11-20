import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Order = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gradient">Cardápio</h1>
        <p className="text-center text-muted-foreground mb-12">Em breve</p>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
