import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EgestorERP from "@/components/EgestorERP";
import About from "@/components/About";
import Services from "@/components/Services";
import Plans from "@/components/Plans";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <EgestorERP />
        <About />
        <Services />
        <Plans />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
