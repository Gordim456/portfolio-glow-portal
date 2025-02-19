
import Header from "@/components/Header";
import { useState } from "react";
import { Filter, ChevronRight } from "lucide-react";

const categories = ["Todos", "Mobile", "Web", "E-commerce", "IA", "Cloud"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const projects = [
    {
      title: "App de Delivery",
      client: "FoodExpress",
      image: "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07",
      description: "Revolucionamos o delivery com tecnologia de ponta. Sistema completo com rastreamento em tempo real.",
      category: "Mobile",
      tags: ["React Native", "Node.js", "MongoDB"],
      results: ["2M+ Downloads", "98% Satisfação", "30min Tempo Médio de Entrega"]
    },
    {
      title: "E-commerce B2B",
      client: "ComercialTech",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Plataforma B2B inovadora com inteligência artificial para recomendações personalizadas.",
      category: "E-commerce",
      tags: ["Next.js", "Python", "AWS"],
      results: ["R$50M/mês", "300+ Fornecedores", "99.9% Uptime"]
    },
    {
      title: "Sistema Financeiro",
      client: "FinanceBank",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      description: "Dashboard financeiro com análise em tempo real e detecção de fraudes por IA.",
      category: "Web",
      tags: ["Vue.js", "Java", "Oracle"],
      results: ["R$100M+ Processados", "0% Fraudes", "500k+ Usuários"]
    },
    {
      title: "Assistente Virtual",
      client: "AITech",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      description: "Assistente virtual com processamento de linguagem natural avançado.",
      category: "IA",
      tags: ["Python", "TensorFlow", "GPT-3"],
      results: ["1M+ Interações", "95% Precisão", "24/7 Disponibilidade"]
    },
    {
      title: "Plataforma Cloud",
      client: "CloudTech",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      description: "Infraestrutura cloud escalável com gerenciamento automatizado.",
      category: "Cloud",
      tags: ["AWS", "Kubernetes", "Terraform"],
      results: ["99.99% Uptime", "50TB Processados", "-40% Custos"]
    },
    {
      title: "App de Saúde",
      client: "HealthTech",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      description: "Aplicativo de telemedicina com monitoramento em tempo real.",
      category: "Mobile",
      tags: ["React Native", "Node.js", "MongoDB"],
      results: ["500k+ Consultas", "4.8 Estrelas", "15min Tempo Médio"]
    }
  ];

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <span className="px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-4 inline-block text-white">
                NOSSO PORTFÓLIO
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Projetos que Transformam Negócios
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Conheça alguns dos projetos que desenvolvemos e os resultados impressionantes 
                que alcançamos para nossos clientes.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 
                            ${activeCategory === category
                              ? "bg-blue-600 text-white"
                              : "bg-white/10 text-gray-300 hover:bg-white/20"
                            }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 
                           transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400">{project.description}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Tecnologias:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Resultados:</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-gray-400">
                            <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
