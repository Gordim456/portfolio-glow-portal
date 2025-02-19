
import Header from "@/components/Header";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <span className="px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-4 inline-block text-white">
                CONTATO
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Vamos Conversar Sobre Seu Projeto
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Estamos prontos para transformar suas ideias em realidade. 
                Entre em contato e descubra como podemos impulsionar seu negócio.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/5 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Informações de Contato</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      title: "Telefone",
                      content: "+55 (11) 99999-9999",
                      description: "Atendimento 24/7"
                    },
                    {
                      icon: Mail,
                      title: "E-mail",
                      content: "contato@gvsoftware.com",
                      description: "Resposta em até 24h"
                    },
                    {
                      icon: MapPin,
                      title: "Endereço",
                      content: "São Paulo, SP",
                      description: "Atendemos todo o Brasil"
                    },
                    {
                      icon: Clock,
                      title: "Horário",
                      content: "Seg - Sex: 9h às 18h",
                      description: "Suporte 24/7"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 
                                    rounded-xl flex items-center justify-center mr-4">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-300 mb-1">{item.content}</p>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-white/5 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Envie sua Mensagem</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-white mb-2 block">Nome</label>
                      <Input placeholder="Seu nome" className="bg-white/10 border-gray-700 text-white" />
                    </div>
                    <div>
                      <label className="text-white mb-2 block">E-mail</label>
                      <Input placeholder="seu@email.com" className="bg-white/10 border-gray-700 text-white" />
                    </div>
                  </div>
                  <div>
                    <label className="text-white mb-2 block">Assunto</label>
                    <Input placeholder="Assunto da mensagem" className="bg-white/10 border-gray-700 text-white" />
                  </div>
                  <div>
                    <label className="text-white mb-2 block">Mensagem</label>
                    <Textarea 
                      placeholder="Descreva seu projeto..." 
                      className="bg-white/10 border-gray-700 text-white"
                      rows={6}
                    />
                  </div>
                  <Button type="submit" className="w-full button-gradient">
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
