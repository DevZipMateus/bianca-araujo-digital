import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/85" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bianca Araújo Contabilidade e Consultoria
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-primary-foreground/90 font-light">
            Transforme burocracias em oportunidades de crescimento com assessoria contábil personalizada e confiável
          </h2>
          <p className="text-lg md:text-xl mb-10 text-primary-foreground/80">
            Mais que números, uma parceria para o seu sucesso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <a href="https://wa.me/5537999214954" className="flex items-center gap-2">
                Fale conosco
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 text-primary-foreground border-white/60 hover:bg-accent hover:text-accent-foreground hover:border-accent">
              <a href="#servicos">Conheça nossos serviços</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
