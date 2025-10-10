import { Target, Eye, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const values = [
    { icon: Target, title: "Missão", description: "Formalizar empreendedores e guiá-los para uma atuação protagonista, ética e consciente. Descomplicamos burocracias e entregamos soluções práticas e confiáveis que fortalecem os negócios dos nossos parceiros." },
    { icon: Eye, title: "Visão", description: "Ser um escritório contábil próspero, reconhecido pela excelência no atendimento e pelo impacto positivo no crescimento dos nossos clientes. Queremos servir com integridade, agregar valor real e promover princípios duradouros que transformem vidas e negócios." },
    { icon: Award, title: "Valores", description: "Propósito, Serviço, Excelência, Verdade, Crescimento, Responsabilidade." },
  ];

  return (
    <section id="sobre" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          {/* Left column - Text */}
          <div className="lg:w-1/2 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Sobre nós</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Nossa empresa nasceu em 2022, com o objetivo de apoiar empreendedores na formalização e principalmente no crescimento e desenvolvimento de seus negócios. Unimos conhecimento técnico, atendimento próximo e soluções inteligentes para ajudar empreendedores a crescer de forma saudável e segura, seja presencialmente ou no ambiente digital.
            </p>
            <p className="text-lg text-muted-foreground">
              Atendemos pessoa física, microempreendedor, e empresas de pequeno e médio porte, com atendimento personalizado para as demandas de cada cliente. Nosso compromisso vai além dos números: buscamos agregar valor, promover decisões conscientes e oferecer confiança, direção e parceria.
            </p>
          </div>

          {/* Right column - Image */}
          <div className="lg:w-1/2 animate-slide-in-right">
            <img 
              src={aboutImage} 
              alt="Bianca Araújo - Contadora" 
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
