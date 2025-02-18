import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import ChatBot from "@/components/ChatBot";
import { Code, Laptop, Rocket, Users, Trophy, Star, Check, Building2, ChartBar, BarChart3, Lightbulb, Shield, Target, ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section id="home" className="pt-16">
          <ImageSlider />
        </section>

        {/* Portfólio */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Projetos em Destaque</h2>
              <p className="text-xl text-gray-600">Criando soluções digitais inovadoras</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "App de Delivery",
                  client: "FoodExpress",
                  image: "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07",
                  description: "Aplicativo completo de delivery com geolocalização",
                  tags: ["React Native", "Node.js", "MongoDB"],
                  highlight: "2M+ Downloads"
                },
                {
                  title: "E-commerce B2B",
                  client: "ComercialTech",
                  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
                  description: "Plataforma B2B com integração multi-fornecedores",
                  tags: ["Next.js", "Python", "AWS"],
                  highlight: "R$50M/mês"
                },
                {
                  title: "Sistema Financeiro",
                  client: "FinanceBank",
                  image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
                  description: "Dashboard financeiro com análise em tempo real",
                  tags: ["Vue.js", "Java", "Oracle"],
                  highlight: "R$100M+ Processados"
                }
              ].map((project, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                           transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-semibold">{project.client}</p>
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm inline-block mt-2">
                          {project.highlight}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium 
                                   hover:bg-blue-100 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="#more-projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 
                         to-purple-600 text-white rounded-full hover:shadow-xl transition-all 
                         duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-purple-700"
              >
                Ver Todos os Projetos
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossas Soluções</h2>
              <p className="text-xl text-gray-600">Transformando ideias em realidade digital</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Sistemas Empresariais</h3>
                <p className="text-gray-600 mb-4">Automatize processos e aumente a eficiência com soluções personalizadas.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    ERP Customizado
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    CRM Inteligente
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Business Intelligence
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <ChartBar className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">E-commerce</h3>
                <p className="text-gray-600 mb-4">Plataformas robustas para impulsionar suas vendas online.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Lojas Virtuais
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Marketplaces
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Gestão de Pedidos
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Laptop className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Apps Mobile</h3>
                <p className="text-gray-600 mb-4">Apps nativos e híbridos de alta performance.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    iOS & Android
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    PWA
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    UX/UI Design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Nós */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre a GV Software</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Há mais de uma década, transformamos o mercado digital com soluções inovadoras e 
                  resultados excepcionais para nossos clientes.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
                    <div className="text-gray-600">Projetos Entregues</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                    <div className="text-gray-600">Clientes Ativos</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl">
                    <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                    <div className="text-gray-600">Satisfação</div>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-xl">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
                    <div className="text-gray-600">Suporte Premium</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="Equipe GV Software"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-green-500" />
                    <span className="font-semibold">ISO 9001 Certificado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cases de Sucesso */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Cases de Sucesso</h2>
              <p className="text-xl text-gray-600">Histórias reais de transformação digital</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  company: "TechCorp",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
                  description: "Aumento de 150% em vendas após implementação do e-commerce.",
                  industry: "Varejo"
                },
                {
                  company: "LogisTech",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
                  description: "Redução de 40% em custos operacionais com sistema personalizado.",
                  industry: "Logística"
                },
                {
                  company: "EduTech",
                  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
                  description: "Alcance de 1 milhão de usuários com app mobile inovador.",
                  industry: "Educação"
                }
              ].map((case_, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={case_.image}
                    alt={case_.company}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{case_.company}</h3>
                    <p className="text-gray-600 mb-4">{case_.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{case_.industry}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">O Que Dizem Nossos Clientes</h2>
              <p className="text-xl text-gray-600">Experiências reais de quem confia em nosso trabalho</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Carlos Silva",
                  role: "CEO TechCorp",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                  text: "A GV Software revolucionou nossa operação digital. Profissionalismo e resultados excepcionais!"
                },
                {
                  name: "Ana Santos",
                  role: "Diretora de Tecnologia",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                  text: "Equipe altamente capacitada e comprometida com a excelência. Superou todas as expectativas!"
                },
                {
                  name: "Roberto Lima",
                  role: "Gestor de Projetos",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
                  text: "Implementação impecável e suporte contínuo. Parceria que agrega valor real ao negócio."
                }
              ].map((testimonial, index) => (
                <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.text}</p>
                  <div className="mt-4 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ChatBot />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GV Software</h3>
              <p className="text-gray-400">
                Transformando ideias em soluções digitais inovadoras.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Soluções</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sistemas Empresariais</li>
                <li>E-commerce</li>
                <li>Apps Mobile</li>
                <li>Websites</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nós</li>
                <li>Cases</li>
                <li>Blog</li>
                <li>Carreira</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@gvsoftware.com</li>
                <li>(11) 9999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 GV Software. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
