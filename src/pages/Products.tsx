
import Header from "@/components/Header";
import { Check, Server, Shield, Zap, Box, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      title: "Starter",
      description: "Ideal para pequenas empresas iniciando sua jornada digital",
      price: "R$ 997",
      period: "/mês",
      features: [
        "Até 5 usuários",
        "Suporte por e-mail",
        "Atualizações mensais",
        "1 projeto ativo",
        "Backup diário",
        "SSL gratuito"
      ],
      icon: Box,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Professional",
      description: "Perfeito para empresas em crescimento",
      price: "R$ 2.497",
      period: "/mês",
      features: [
        "Até 20 usuários",
        "Suporte prioritário 12/5",
        "Atualizações semanais",
        "5 projetos ativos",
        "Backup em tempo real",
        "Domínio personalizado",
        "API completa",
        "Painel administrativo"
      ],
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      title: "Enterprise",
      description: "Solução completa para grandes empresas",
      price: "Personalizado",
      period: "",
      features: [
        "Usuários ilimitados",
        "Suporte 24/7 dedicado",
        "Atualizações em tempo real",
        "Projetos ilimitados",
        "Infraestrutura dedicada",
        "SLA garantido",
        "Customização completa",
        "Treinamento presencial",
        "Consultoria estratégica"
      ],
      icon: Server,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <span className="px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-4 inline-block text-white">
                PRODUTOS
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Escolha o Plano Ideal para Seu Negócio
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Oferecemos soluções escaláveis que crescem junto com sua empresa, 
                com planos flexíveis e recursos poderosos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 rounded-2xl p-8 hover:bg-white/10 
                           transition-all duration-300 ${
                             product.popular ? "border-2 border-blue-500" : ""
                           }`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-1 bg-blue-500 text-white text-sm rounded-full">
                        Mais Popular
                      </span>
                    </div>
                  )}

                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} 
                                flex items-center justify-center mb-6`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-400 mb-6">{product.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{product.price}</span>
                    <span className="text-gray-400">{product.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full button-gradient">
                    Começar Agora
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-20 bg-white/5 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Precisa de uma Solução Personalizada?
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Nossa equipe de especialistas está pronta para desenvolver uma solução 
                    sob medida para seu negócio, atendendo suas necessidades específicas.
                  </p>
                  <Button className="button-gradient">
                    Falar com Especialista
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      icon: Shield,
                      title: "Segurança Garantida",
                      description: "Proteção de dados e conformidade com LGPD"
                    },
                    {
                      icon: Gift,
                      title: "Benefícios Exclusivos",
                      description: "Vantagens especiais para grandes projetos"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/5 p-6 rounded-xl">
                      <item.icon className="w-8 h-8 text-blue-500 mb-4" />
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;
