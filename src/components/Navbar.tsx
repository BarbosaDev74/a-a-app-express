import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { CartDrawer } from "./CartDrawer";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-elegant">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="text-2xl font-bold">Açaí Artesanal</div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="hover:text-accent transition-smooth">
                Início
              </Link>
              <Link to="/cardapio" className="hover:text-accent transition-smooth">
                Cardápio
              </Link>
              <Link to="/sobre" className="hover:text-accent transition-smooth">
                Sobre Nós
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/cardapio"
              className="block py-2 text-foreground hover:text-primary transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cardápio
            </Link>
            <Link
              to="/sobre"
              className="block py-2 text-foreground hover:text-primary transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Link to="/cardapio" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="hero" className="w-full">Pedir Agora</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
    <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </>
  );
};
