import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import ChatBot from "@/components/ChatBot";
import { Code, Laptop, Rocket, Users, Trophy } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section id="home" className="pt-16">
          <ImageSlider />
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2">Desenvolvimento de Software</h3>
                <p className="text-gray-600">
                  Criamos soluções de software personalizadas para atender às suas necessidades específicas.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
                  <Laptop className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2">Design Responsivo</h3>
                <p className="text-gray-600">
                  Garantimos que seu site tenha uma ótima aparência em todos os dispositivos, desde desktops até smartphones.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600 mb-4">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2">Marketing Digital</h3>
                <p className="text-gray-600">
                  Aumente sua visibilidade online e atraia mais clientes com nossas estratégias de marketing digital.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2">Suporte ao Cliente</h3>
                <p className="text-gray-600">
                  Oferecemos suporte técnico de alta qualidade para garantir que você tenha a melhor experiência possível.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-blue-50 rounded-lg shadow-md">
              <h2 className="font-bold text-2xl text-blue-800 mb-4">Por que escolher a GV Software?</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Equipe experiente e qualificada</li>
                <li>Soluções personalizadas para suas necessidades</li>
                <li>Compromisso com a qualidade e a satisfação do cliente</li>
                <li>Preços competitivos e transparentes</li>
              </ul>
            </div>

            <div className="mt-12 p-8 bg-green-50 rounded-lg shadow-md">
              <h2 className="font-bold text-2xl text-green-800 mb-4">Nossos Prêmios e Reconhecimentos</h2>
              <div className="flex items-center space-x-6">
                <Trophy className="h-12 w-12 text-yellow-500" />
                <div>
                  <h3 className="font-semibold text-xl text-green-800">Prêmio de Inovação em Tecnologia</h3>
                  <p className="text-gray-700">Reconhecidos pela nossa abordagem inovadora e soluções criativas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ChatBot />
      </main>
    </div>
  );
};

export default Index;
