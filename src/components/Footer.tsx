import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-xl text-gradient">Açaí Store</span>
            </div>
            <p className="text-muted-foreground text-sm">
              O melhor açaí da região, feito com ingredientes frescos e naturais.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-muted-foreground hover:text-primary transition-smooth">
                  Cardápio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>contato@acaistore.com.br</li>
              <li>(11) 99999-9999</li>
              <li>Seg - Dom: 10h - 22h</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white flex items-center justify-center transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white flex items-center justify-center transition-smooth"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white flex items-center justify-center transition-smooth"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          © 2025 Açaí Store. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
