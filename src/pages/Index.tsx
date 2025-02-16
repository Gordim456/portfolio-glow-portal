
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import ChatBot from "@/components/ChatBot";
import { Code, Laptop, Rocket, PhoneCall, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section id="home" className="pt-16">
          <ImageSlider />
        </section>

        <section id="about" className="py-20 bg-gradient-to-b from-secondary/20 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold">Sobre Nós</span>
              <h2 className="text-4xl font-bold mt-2 mb-8 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Experiência em Desenvolvimento
              </h2>
              <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                Somos uma equipe apaixonada por tecnologia, especializada em criar 
                soluções digitais inovadoras que transformam ideias em realidade. 
                Nossa missão é impulsionar o sucesso do seu negócio através da 
                excelência em desenvolvimento de software.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Desenvolvimento Web</h3>
                  <p className="text-gray-600">
                    Criamos websites e aplicações web modernas, responsivas e 
                    otimizadas para todos os dispositivos.
                  </p>
                </div>

                <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Laptop className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Sistemas</h3>
                  <p className="text-gray-600">
                    Desenvolvimento de sistemas empresariais personalizados para 
                    otimizar seus processos.
                  </p>
                </div>

                <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Rocket className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Consultoria</h3>
                  <p className="text-gray-600">
                    Consultoria estratégica em tecnologia para impulsionar a 
                    inovação no seu negócio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold">Portfólio</span>
              <h2 className="text-4xl font-bold mt-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Nossos Projetos
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce Premium",
                  desc: "Plataforma completa de vendas online",
                  img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                },
                {
                  title: "App de Gestão",
                  desc: "Sistema integrado de gestão empresarial",
                  img: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                },
                {
                  title: "Marketing Digital",
                  desc: "Plataforma de automação de marketing",
                  img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                },
                {
                  title: "Dashboard Analytics",
                  desc: "Painel de análise de dados em tempo real",
                  img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                },
                {
                  title: "Sistema de CRM",
                  desc: "Gestão completa de relacionamento com clientes",
                  img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                },
                {
                  title: "App Delivery",
                  desc: "Aplicativo de entrega sob demanda",
                  img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/90">{project.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-b from-white to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-primary font-semibold">Contato</span>
                <h2 className="text-4xl font-bold mt-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Vamos Conversar
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <PhoneCall className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefone</h3>
                      <p className="text-gray-600">(11) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">contato@gvsoftware.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Endereço</h3>
                      <p className="text-gray-600">
                        Rua Principal, 123<br />
                        São Paulo, SP
                      </p>
                    </div>
                  </div>
                </div>

                <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  <textarea
                    placeholder="Mensagem"
                    rows={4}
                    className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 px-6 rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <span className="text-2xl font-bold text-primary">GV Software</span>
          </div>
          <p className="text-gray-600 max-w-md mx-auto">
            Transformando ideias em soluções digitais inovadoras. 
            Especialistas em desenvolvimento de software e consultoria em tecnologia.
          </p>
          <div className="mt-8">
            <p className="text-gray-500">&copy; 2024 GV Software. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default Index;
