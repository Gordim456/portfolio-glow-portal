
import { ChevronRight } from "lucide-react";

const projects = [
  {
    title: "App de Delivery",
    client: "FoodExpress",
    image: "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07",
    description: "Revolucionamos o delivery com tecnologia de ponta. Sistema completo com rastreamento em tempo real, integração com múltiplos estabelecimentos e análise preditiva de demanda.",
    tags: ["React Native", "Node.js", "MongoDB"],
    highlight: "2M+ Downloads",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "E-commerce B2B",
    client: "ComercialTech",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Plataforma B2B inovadora com inteligência artificial para recomendações, gestão automatizada de estoque e integração com ERPs dos principais fornecedores.",
    tags: ["Next.js", "Python", "AWS"],
    highlight: "R$50M/mês",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Sistema Financeiro",
    client: "FinanceBank",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    description: "Dashboard financeiro com análise em tempo real, machine learning para detecção de fraudes e integração com principais instituições financeiras.",
    tags: ["Vue.js", "Java", "Oracle"],
    highlight: "R$100M+ Processados",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Plataforma Educacional",
    client: "EduTech",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Ambiente virtual de aprendizagem com recursos adaptativos, gamificação e análise de desempenho baseada em IA para personalização do ensino.",
    tags: ["React", "Python", "TensorFlow"],
    highlight: "1M+ Alunos",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Sistema de Logística",
    client: "LogisTech",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    description: "Solução completa de logística com otimização de rotas por IA, gestão de frota em tempo real e previsão de demanda.",
    tags: ["Angular", "Go", "PostgreSQL"],
    highlight: "500K+ Entregas/mês",
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Healthcare Platform",
    client: "HealthTech",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    description: "Plataforma de telemedicina com prontuário eletrônico, agendamento inteligente e integração com dispositivos IoT de monitoramento.",
    tags: ["React", "Node.js", "MongoDB"],
    highlight: "2M+ Consultas",
    color: "from-teal-500 to-blue-500"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <span className="px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-4 inline-block">
            PROJETOS EM DESTAQUE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Transformando Ideias em Realidade
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Nossa expertise em desenvolvimento de software permite criar soluções 
            inovadoras que impulsionam o crescimento e a transformação digital dos 
            nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group modern-card bg-gray-800/50 backdrop-blur-sm 
                       border border-gray-700/50 hover:border-gray-600"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="modern-card-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 
                              to-transparent opacity-0 group-hover:opacity-100 transition-all 
                              duration-500 flex items-end p-6">
                  <div>
                    <p className="text-white font-semibold mb-2">{project.client}</p>
                    <div className={`bg-gradient-to-r ${project.color} text-white px-3 py-1 
                                  rounded-full text-sm inline-block`}>
                      {project.highlight}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modern-card-content">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 
                           transition-colors">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="modern-tag bg-gray-700 text-gray-300 
                               hover:bg-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#more-projects"
            className="button-gradient group inline-flex items-center gap-2"
          >
            Ver Todos os Projetos
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
