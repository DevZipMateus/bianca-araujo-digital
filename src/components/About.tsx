import aboutImage from "@/assets/about-image.jpg";

const About = () => {
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
          <div className="lg:w-1/2 animate-slide-in-right flex justify-center">
            <img 
              src={aboutImage} 
              alt="Bianca Araújo - Contadora" 
              className="rounded-lg shadow-xl w-4/5 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
