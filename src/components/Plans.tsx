import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Plans = () => {
  const plans = [
    {
      name: "Assessoria MEI",
      description: "Ideal para microempreendedores individuais",
      features: [
        "Atendimento e suporte personalizados",
        "Controle financeiro",
        "Envio das guias",
        "Lembretes de vencimento",
        "Emissão de notas fiscais",
        "Reuniões de alinhamento"
      ]
    },
    {
      name: "Assessoria mensal",
      description: "Completo para pequenas e médias empresas",
      featured: true,
      features: [
        "Atendimento e suporte personalizados",
        "Folha de pagamento",
        "Apuração de impostos",
        "Contabilidade completa",
        "Reuniões de alinhamento",
        "Suporte para emissão de notas fiscais"
      ]
    }
  ];

  return (
    <section id="planos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Nossos planos</h2>
          <p className="text-lg text-muted-foreground">
            Escolha o plano ideal para o seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 hover:shadow-xl transition-all animate-scale-in ${
                plan.featured ? 'border-2 border-primary' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.featured && (
                <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Mais completo
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-primary">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="w-full" variant={plan.featured ? "default" : "outline"}>
                <a href="https://wa.me/5537999214954">Solicitar orçamento</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
