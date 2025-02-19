
import Header from "@/components/Header";
import { Building2, Trophy, Users, Clock, ChevronRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <span className="px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-4 inline-block text-white">
                SOBRE NÓS
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Excelência em Desenvolvimento de Software
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Há mais de uma década transformando ideias em soluções digitais de sucesso, 
                com um time de especialistas apaixonados por tecnologia e inovação.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: Building2,
                  number: "10+",
                  label: "Anos de Experiência",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Trophy,
                  number: "200+",
                  label: "Projetos Entregues",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: Users,
                  number: "50+",
                  label: "Especialistas",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: Clock,
                  number: "98%",
                  label: "Entregas no Prazo",
                  color: "from-yellow-500 to-orange-500"
                }
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} 
                                flex items-center justify-center`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-4">Por que escolher a GV Software?</h2>
                <ul className="space-y-4">
                  {[
                    "Equipe altamente especializada com certificações internacionais",
                    "Metodologia ágil com entregas regulares e transparência total",
                    "Suporte 24/7 com tempo de resposta garantido",
                    "Tecnologias mais avançadas do mercado",
                    "Compromisso com prazos e qualidade",
                    "ROI comprovado em todos os projetos"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <ChevronRight className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="button-gradient inline-flex items-center gap-2 mt-8">
                  Iniciar Projeto
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                  alt="Nossa equipe" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
