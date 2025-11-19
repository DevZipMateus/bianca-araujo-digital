import { FileText, Building2, Calculator, Users, TrendingUp, FileCheck, Receipt, UserCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import servicesImage from "@/assets/services-image.jpg";
import galleryImage from "@/assets/gallery-2.jpg";

const Services = () => {
  const services = [
    { icon: Building2, title: "Abertura de empresas", description: "Processo completo de abertura de CNPJ com agilidade e segurança" },
    { icon: FileCheck, title: "Regularização PF e PJ", description: "Resolva pendências fiscais de pessoa física e jurídica" },
    { icon: Calculator, title: "Assessoria contábil mensal", description: "Acompanhamento completo da sua contabilidade" },
    { icon: FileText, title: "Encerramento de CNPJ", description: "Baixa de empresa de forma rápida e segura" },
    { icon: TrendingUp, title: "Consultorias", description: "Orientação estratégica para o crescimento do seu negócio" },
    { icon: Users, title: "Abertura e gestão de MEI", description: "Formalização e gestão completa para microempreendedores" },
    { icon: Receipt, title: "Imposto de renda PF", description: "Declaração de imposto de renda pessoa física" },
    { icon: UserCheck, title: "Inscrição de autônomo", description: "Regularização e gestão para profissionais autônomos" },
  ];

  const products = [
    { title: "eGestor", description: "Sistema completo de gestão empresarial para controlar seu negócio" },
    { title: "Certificado digital", description: "Emissão e renovação de certificado digital A1 e A3" },
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Nossos serviços</h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas em contabilidade e consultoria para pessoa física e empresas
          </p>
        </div>

        {/* First row - Image left + 4 services right */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="lg:w-1/3 animate-fade-in">
            <img 
              src={servicesImage} 
              alt="Serviços contábeis profissionais" 
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {services.slice(0, 4).map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex gap-3 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <div className="flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Second row - 4 services left + Image right */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {services.slice(4, 8).map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex gap-3 animate-fade-in" style={{ animationDelay: `${(index + 4) * 50}ms` }}>
                  <div className="flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lg:w-1/3 animate-fade-in">
            <img 
              src={galleryImage} 
              alt="Consultoria contábil especializada" 
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Products section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center text-primary">Produtos</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold mb-2 text-foreground">{product.title}</h4>
                <p className="text-muted-foreground">{product.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
