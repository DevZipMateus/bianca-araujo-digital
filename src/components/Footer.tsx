import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Nossos serviços", href: "#servicos" },
    { name: "Planos", href: "#planos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bianca Araújo</h3>
            <p className="text-primary-foreground/90 mb-4">
              Contabilidade e Consultoria
            </p>
            <p className="text-primary-foreground/80 text-sm">
              Mais que números, uma parceria para o seu sucesso
            </p>
          </div>

          {/* Coluna 2 - Links rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a 
                  href="https://wa.me/5537999214954" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  (37) 99921-4954
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:biancaaraujocont@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  biancaaraujocont@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Manoel+Gonçalves,+91,+Sala+G,+Centro,+Itaúna-MG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Rua Manoel Gonçalves, 91, Sala G<br />
                  Centro, Itaúna-MG - CEP 35680-055
                </a>
              </li>
            </ul>

            {/* Redes sociais */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://www.instagram.com/biancaaraujocont" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/biancaaraujocont" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {currentYear} Bianca Araújo Contabilidade e Consultoria. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/60 text-xs mt-2">
            CNPJ: 48.046.820/0001-40
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
