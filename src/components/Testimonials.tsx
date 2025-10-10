import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Paula",
      company: "FBS Manutenção",
      text: "A contabilidade Bianca se destaca na agilidade, organização e no profissionalismo em todos os processos, desde a parte fiscal até o suporte em questões administrativas. Com atendimento sempre atencioso, claro e eficiente, o que nos transmite confiança e segurança em nossa parceria, que contribui diretamente para o crescimento e a tranquilidade da FBS."
    },
    {
      name: "Patrícia",
      company: "Stylo Modas",
      text: "Bianca Araújo é uma excelente profissional, ética, atenta e que possui conhecimento e estrutura para gerir os resultados da minha empresa. Confio e recomendo de olhos fechados! Parabéns pelo excelente trabalho. Stylo Modas tem muito respeito e admiração pelo seu trabalho."
    },
    {
      name: "Fábio",
      company: "Mercearia 2 Irmãos",
      text: "Estou muito satisfeito como cliente da Bianca Araújo Soluções Contábeis, excelente atendimento, profissionalismo nota 10, super competente e atualizada. Venha você também deixar sua empresa ser cuidada por quem entende."
    },
    {
      name: "Dilma",
      company: "Açougue do Serginho",
      text: "Minha experiência com a contabilidade tem sido excelente! Sempre muito atenciosa, dedicada e disposta a esclarecer todas as dúvidas. O trabalho é feito com agilidade, organização e muita confiança, o que me dá tranquilidade no dia a dia. Recomendo de coração!"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">O que nossos clientes dizem</h2>
          <p className="text-lg text-muted-foreground">
            A confiança dos nossos parceiros é o nosso maior patrimônio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-shadow animate-scale-in relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />
              <p className="text-muted-foreground mb-6 relative z-10">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
