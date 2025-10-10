import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    { icon: Phone, label: "Telefone", value: "(37) 99921-4954", href: "https://wa.me/5537999214954" },
    { icon: Mail, label: "E-mail", value: "biancaaraujocont@gmail.com", href: "mailto:biancaaraujocont@gmail.com" },
    { icon: MapPin, label: "Endereço", value: "Rua Manoel Gonçalves, 91, Sala G, Centro, Itaúna-MG - CEP 35680-055", href: null },
    { icon: Clock, label: "Horário", value: "Segunda a Sexta: 08h às 17h", href: null }
  ];

  const socialMedia = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/biancaaraujocont" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/biancaaraujocont" }
  ];

  return (
    <section id="contato" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Entre em contato</h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para ajudar você a crescer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = (
              <Card className="p-6 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 text-foreground">{info.label}</h3>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              </Card>
            );

            return info.href ? (
              <a key={index} href={info.href} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {socialMedia.map((social, index) => {
            const Icon = social.icon;
            return (
              <Button 
                key={index} 
                asChild 
                variant="outline" 
                size="lg"
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  {social.label}
                </a>
              </Button>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <a href="https://wa.me/5537999214954">Fale conosco pelo WhatsApp</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
