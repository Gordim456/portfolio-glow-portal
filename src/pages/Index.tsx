
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import ChatBot from "@/components/ChatBot";
import { Code, Laptop, Rocket } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section id="home" className="pt-16">
          <ImageSlider />
        </section>

        <section id="about" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold">Sobre Nós</span>
              <h2 className="text-3xl font-bold mt-2 mb-8">
                Experiência em Desenvolvimento
              </h2>
              <p className="text-gray-600 mb-12">
                Somos especialistas em criar soluções digitais inovadoras que
                impulsionam o sucesso do seu negócio. Nossa equipe combina
                criatividade e tecnologia para entregar resultados excepcionais.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Desenvolvimento Web</h3>
                  <p className="text-gray-600 text-sm">
                    Sites e aplicações web modernas e responsivas
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Laptop className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Sistemas</h3>
                  <p className="text-gray-600 text-sm">
                    Sistemas empresariais personalizados
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Consultoria</h3>
                  <p className="text-gray-600 text-sm">
                    Consultoria em tecnologia e inovação
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold">Portfólio</span>
              <h2 className="text-3xl font-bold mt-2">Nossos Projetos</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={`https://picsum.photos/seed/${item}/600/400`}
                    alt={`Projeto ${item}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-center p-4">
                      <h3 className="text-white font-semibold mb-2">
                        Projeto {item}
                      </h3>
                      <p className="text-white/90 text-sm">
                        Descrição breve do projeto
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <span className="text-primary font-semibold">Contato</span>
              <h2 className="text-3xl font-bold mt-2 mb-8">Fale Conosco</h2>
              
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                />
                <textarea
                  placeholder="Mensagem"
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 GV Software. Todos os direitos reservados.</p>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default Index;
