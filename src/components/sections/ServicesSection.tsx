
import { Shield, Code, Rocket, Users } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossas Soluções</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos um conjunto completo de serviços de desenvolvimento, 
            consultoria e suporte para impulsionar sua transformação digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Code,
              title: "Desenvolvimento",
              description: "Criamos soluções personalizadas com as mais recentes tecnologias e melhores práticas de mercado.",
              features: ["Web Apps", "Mobile", "APIs", "Cloud"]
            },
            {
              icon: Rocket,
              title: "Inovação",
              description: "Implementamos soluções inovadoras usando IA, Machine Learning e tecnologias emergentes.",
              features: ["IA", "IoT", "Blockchain", "Big Data"]
            },
            {
              icon: Shield,
              title: "Segurança",
              description: "Garantimos a proteção dos seus dados com as mais avançadas práticas de segurança.",
              features: ["Criptografia", "LGPD", "Pentests", "Backups"]
            },
            {
              icon: Users,
              title: "Consultoria",
              description: "Oferecemos consultoria especializada para otimizar seus processos e tecnologias.",
              features: ["Análise", "Planejamento", "Otimização", "Suporte"]
            }
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl 
                       transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 
                          rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
