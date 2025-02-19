
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section id="home" className="pt-16">
          <ImageSlider />
        </section>

        <ProjectsSection />
        <ServicesSection />

        <ChatBot />
      </main>
    </div>
  );
};

export default Index;
