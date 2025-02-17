
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import ChatBot from "@/components/ChatBot";
import { Code, Laptop, Rocket, PhoneCall, Mail, MapPin, Users, Trophy, Clock, Check, Briefcase, Instagram, Facebook, Video } from "lucide-react";

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

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-blue-900">250+</h4>
                <p className="text-gray-600">Projetos Entregues</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-blue-900">100+</h4>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-blue-900">10+</h4>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-blue-900">98%</h4>
                <p className="text-gray-600">Taxa de Satisfação</p>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Briefcase className="w-6 h-6 text-blue-600" />
                <span className="text-blue-600 font-semibold">Nosso Portfólio</span>
              </div>
              <h2 className="text-4xl font-bold mt-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Projetos em Destaque
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Conheça alguns dos nossos projetos mais recentes e descubra como ajudamos empresas 
                a alcançarem seus objetivos através de soluções tecnológicas inovadoras.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce Premium",
                  desc: "Plataforma completa de vendas online com integração de pagamentos, gestão de estoque e análise de dados em tempo real.",
                  img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
                  tags: ["React", "Node.js", "MongoDB"]
                },
                {
                  title: "App de Gestão",
                  desc: "Sistema integrado de gestão empresarial com módulos de RH, financeiro, vendas e relatórios personalizados.",
                  img: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
                  tags: ["React Native", "Firebase", "Redux"]
                },
                {
                  title: "Marketing Digital",
                  desc: "Plataforma de automação de marketing com análise de campanhas, segmentação de público e integração com redes sociais.",
                  img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                  tags: ["Vue.js", "Python", "AWS"]
                },
                {
                  title: "Dashboard Analytics",
                  desc: "Painel de análise de dados em tempo real com visualizações interativas e relatórios automatizados.",
                  img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
                  tags: ["Next.js", "TypeScript", "PostgreSQL"]
                },
                {
                  title: "Sistema de CRM",
                  desc: "Gestão completa de relacionamento com clientes, incluindo pipeline de vendas e automação de follow-up.",
                  img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
                  tags: ["Angular", "Java", "Spring Boot"]
                },
                {
                  title: "App Delivery",
                  desc: "Aplicativo de entrega sob demanda com rastreamento em tempo real e sistema de avaliação.",
                  img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
                  tags: ["Flutter", "NodeJS", "MongoDB"]
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
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/90 mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <span>Comece seu projeto</span>
                <Check className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
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

      <footer className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">GV Software</h3>
              <p className="text-blue-100 mb-6">
                Transformando ideias em soluções digitais inovadoras. 
                Especialistas em desenvolvimento de software e consultoria em tecnologia.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full 
                           flex items-center justify-center hover:scale-110 transition-all 
                           duration-300 hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center 
                           justify-center hover:scale-110 transition-all duration-300 
                           hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded-full flex items-center 
                           justify-center hover:scale-110 transition-all duration-300 
                           hover:shadow-lg"
                  aria-label="TikTok"
                >
                  <Video className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="text-blue-100 hover:text-white transition-colors">Início</a></li>
                <li><a href="#about" className="text-blue-100 hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#portfolio" className="text-blue-100 hover:text-white transition-colors">Portfólio</a></li>
                <li><a href="#contact" className="text-blue-100 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <div className="space-y-4">
                <p className="flex items-center gap-2 text-blue-100">
                  <MapPin className="w-5 h-5" />
                  <span>Rua Principal, 123, São Paulo, SP</span>
                </p>
                <p className="flex items-center gap-2 text-blue-100">
                  <Mail className="w-5 h-5" />
                  <span>contato@gvsoftware.com</span>
                </p>
                <p className="flex items-center gap-2 text-blue-100">
                  <PhoneCall className="w-5 h-5" />
                  <span>(11) 99999-9999</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-100">
            <p>&copy; 2024 GV Software. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Fixed Social Media Icons */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-40">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full 
                   flex items-center justify-center hover:scale-110 transition-all duration-300 
                   hover:shadow-lg group"
          aria-label="Instagram"
        >
          <Instagram className="w-6 h-6 text-white" />
          <span className="absolute left-full ml-4 px-4 py-2 bg-white rounded-lg shadow-lg 
                        text-gray-800 text-sm font-medium opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 whitespace-nowrap">
            Siga no Instagram
          </span>
        </a>
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center 
                   hover:scale-110 transition-all duration-300 hover:shadow-lg group"
          aria-label="Facebook"
        >
          <Facebook className="w-6 h-6 text-white" />
          <span className="absolute left-full ml-4 px-4 py-2 bg-white rounded-lg shadow-lg 
                        text-gray-800 text-sm font-medium opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 whitespace-nowrap">
            Curta no Facebook
          </span>
        </a>
        <a 
          href="https://tiktok.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-black rounded-full flex items-center justify-center 
                   hover:scale-110 transition-all duration-300 hover:shadow-lg group"
          aria-label="TikTok"
        >
          <Video className="w-6 h-6 text-white" />
          <span className="absolute left-full ml-4 px-4 py-2 bg-white rounded-lg shadow-lg 
                        text-gray-800 text-sm font-medium opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 whitespace-nowrap">
            Siga no TikTok
          </span>
        </a>
      </div>

      <ChatBot />
    </div>
  );
};

export default Index;
