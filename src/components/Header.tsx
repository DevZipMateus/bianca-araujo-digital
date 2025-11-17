import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const menuItems = [{
    label: "Início",
    href: "#inicio"
  }, {
    label: "Sobre",
    href: "#sobre"
  }, {
    label: "Serviços",
    href: "#servicos"
  }, {
    label: "Planos",
    href: "#planos"
  }, {
    label: "Depoimentos",
    href: "#depoimentos"
  }, {
    label: "Contato",
    href: "#contato"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-background"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center">
            <img src="/logo.png" alt="Bianca Araújo Contabilidade" className="h-44" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map(item => <a key={item.href} href={item.href} className="text-foreground hover:text-primary transition-colors font-medium">
                {item.label}
              </a>)}
            <Button asChild variant="default" size="sm">
              <a href="https://wa.me/5537999214954">Fale conosco</a>
            </Button>
          </nav>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && <nav className="md:hidden pb-4 animate-fade-in">
            {menuItems.map(item => <a key={item.href} href={item.href} className="block py-3 text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {item.label}
              </a>)}
            <Button asChild className="w-full mt-2">
              <a href="https://wa.me/5537999214954">Fale conosco</a>
            </Button>
          </nav>}
      </div>
    </header>;
};
export default Header;