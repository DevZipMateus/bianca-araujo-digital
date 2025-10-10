import { FileText, Building2, Calculator, Users, TrendingUp, FileCheck, Receipt, UserCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

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
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Nossos serviços</h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas em contabilidade e consultoria para pessoa física e empresas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary">Produtos</h3>
          <div className="grid md:grid-cols-2 gap-6">
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
