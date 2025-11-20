import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="font-bold text-xl text-gradient">Açaí Store</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-smooth">
              Início
            </Link>
            <Link to="/order" className="text-foreground hover:text-primary transition-smooth">
              Cardápio
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-smooth">
              Sobre
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Link to="/auth">
              <Button variant="outline">
                <User className="h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link to="/order">
              <Button variant="hero">Pedir Agora</Button>
            </Link>
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
              to="/order"
              className="block py-2 text-foreground hover:text-primary transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cardápio
            </Link>
            <Link
              to="/about"
              className="block py-2 text-foreground hover:text-primary transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  <User className="h-4 w-4" />
                  Login
                </Button>
              </Link>
              <Link to="/order" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="hero" className="w-full">Pedir Agora</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
