import { useState } from "react";
import { MessageSquare, X, Send, Sparkles, Star } from "lucide-react";

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  reason: string;
}

interface ChatMessage {
  text: string;
  isBot: boolean;
  timestamp: string;
}

interface Conversation {
  userInfo: UserInfo;
  messages: ChatMessage[];
  id?: number;
}

const initialBotMessage = `👋 Olá! Sou o assistente virtual da GV Software!

🚀 Estamos aqui para revolucionar seu negócio com:

💻 Soluções Digitais:
• Sites e Aplicativos Premium
• E-commerce Avançado
• Sistemas Personalizados
• Inteligência Artificial
• Apps Mobile
• Dashboards Interativos

🎯 Nossos Números:
• +250 Projetos Entregues
• +100 Clientes Satisfeitos
• 98% Taxa de Satisfação
• 24/7 Suporte Premium
• 10+ Anos de Experiência

💎 Diferenciais:
• Tecnologias de Ponta
• Equipe Especializada
• Metodologias Ágeis
• Suporte Dedicado
• Consultoria Estratégica

🏆 Reconhecimentos:
• Prêmio Inovação Digital 2023
• Top 10 Empresas de Software
• Certificação ISO 9001
• Parceiro Microsoft & Google

💡 Como posso ajudar você hoje?
1. Desenvolvimento de Projetos
2. Consultoria Tecnológica
3. Orçamentos
4. Suporte Técnico
5. Agendamento de Reunião`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    email: "",
    reason: ""
  });

  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      text: "Olá! Como posso ajudar você hoje?", 
      isBot: true,
      timestamp: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState("");

  const saveToLocalStorage = (conversation: Conversation) => {
    const conversations = JSON.parse(localStorage.getItem('chatbot-conversations') || '[]');
    conversations.push(conversation);
    localStorage.setItem('chatbot-conversations', JSON.stringify(conversations));
  };

  const saveToServer = async (conversation: Conversation) => {
    try {
      const response = await fetch('http://localhost:3001/conversations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(conversation),
      });
      if (!response.ok) throw new Error('Erro ao salvar conversa');
    } catch (error) {
      console.error('Erro ao salvar no servidor:', error);
      saveToLocalStorage(conversation);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserInfo(formData);
    setShowForm(false);
    
    const welcomeMessage: ChatMessage = { 
      text: `Olá ${formData.firstName}! ${initialBotMessage}`, 
      isBot: true,
      timestamp: new Date().toISOString()
    };

    setMessages([welcomeMessage]);

    const conversation: Conversation = {
      userInfo: formData,
      messages: [welcomeMessage],
    };

    saveToServer(conversation).catch(() => saveToLocalStorage(conversation));
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !userInfo) return;

    const userMessage: ChatMessage = {
      text: input,
      isBot: false,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      let responseText = "";
      const lowercaseInput = input.toLowerCase();
      
      if (lowercaseInput.includes("preço") || lowercaseInput.includes("custo") || lowercaseInput.includes("valor") || lowercaseInput.includes("orçamento")) {
        responseText = `💼 Excelente! Para fornecer um orçamento preciso e competitivo, precisamos entender melhor seu projeto.

📊 Fatores que consideramos:
• Escopo do projeto
• Prazo desejado
• Funcionalidades necessárias
• Integrações requeridas
• Nível de customização
• Suporte necessário

🤝 Benefícios inclusos:
• Consultoria inicial gratuita
• Suporte premium 24/7
• Garantia de código
• Treinamento da equipe
• Manutenção preventiva

📅 Podemos agendar uma reunião para discutir detalhes?
Escolha o formato:
1. Video chamada
2. Presencial
3. Ligação telefônica`;
      } 
      else if (lowercaseInput.includes("prazo") || lowercaseInput.includes("tempo")) {
        responseText = `⏱️ Sobre nossos prazos de desenvolvimento:

📋 Estimativas comuns:
• Landing Pages: 1-2 semanas
• Sites institucionais: 2-4 semanas
• E-commerce: 4-8 semanas
• Sistemas empresariais: 8-16 semanas
• Apps Mobile: 8-12 semanas

⚡ Fatores que otimizam o prazo:
• Documentação clara
• Feedback rápido
• Metodologia ágil
• Sprints semanais
• Entregas incrementais

🎯 Garantimos:
• Cumprimento de deadlines
• Comunicação transparente
• Updates diários
• Qualidade premium
• Testes rigorosos

Quer discutir um cronograma específico para seu projeto?`;
      }
      else if (lowercaseInput.includes("reunião") || lowercaseInput.includes("conversar")) {
        responseText = `📅 Ótimo! Vamos agendar uma reunião personalizada.

⏰ Horários disponíveis:
• Segunda a Sexta: 9h às 18h
• Sábado: 9h às 12h

📌 Formatos:
1. Video chamada (Zoom/Meet/Teams)
2. Presencial (Escritório SP)
3. Ligação telefônica

💡 Na reunião abordaremos:
• Objetivos do projeto
• Soluções técnicas
• Prazos e custos
• Demonstrações
• Dúvidas específicas

Por favor, indique:
1. Data e horário preferidos
2. Formato desejado
3. Melhor contato`;
      }
      else if (lowercaseInput.includes("tecnologia") || lowercaseInput.includes("tech") || lowercaseInput.includes("stack")) {
        responseText = `🚀 Nossas Tecnologias de Ponta:

💻 Frontend:
• React/Next.js
• Vue.js/Nuxt
• TypeScript
• Tailwind CSS
• Material UI

⚙️ Backend:
• Node.js
• Python
• Java
• .NET Core
• GraphQL

📱 Mobile:
• React Native
• Flutter
• iOS/Swift
• Android/Kotlin

☁️ Cloud:
• AWS
• Google Cloud
• Azure
• Docker/Kubernetes

🛠️ Extras:
• CI/CD
• Microsserviços
• PWA
• WebSockets
• API REST

Quer saber mais sobre alguma tecnologia específica?`;
      }
      else if (lowercaseInput.includes("segurança") || lowercaseInput.includes("proteção") || lowercaseInput.includes("dados")) {
        responseText = `🔒 Segurança é nossa prioridade:

🛡️ Proteção de Dados:
• Criptografia de ponta a ponta
• Certificados SSL/TLS
• Backups automáticos
• Monitoramento 24/7
• Firewall avançado

📋 Conformidades:
• LGPD
• GDPR
• ISO 27001
• PCI DSS
• SOC 2

🔐 Práticas de Segurança:
• Autenticação em 2 fatores
• Logs de auditoria
• Testes de penetração
• Atualizações regulares
• Análise de vulnerabilidades

Quer saber mais sobre nossas práticas de segurança?`;
      }
      else if (lowercaseInput.includes("suporte") || lowercaseInput.includes("ajuda") || lowercaseInput.includes("assistência")) {
        responseText = `🎯 Nosso Suporte Premium:

💪 Disponibilidade:
• Atendimento 24/7
• Resposta em até 1h
• Monitoramento proativo
• Suporte multilíngue
• Equipe dedicada

🛠️ Canais de Atendimento:
• Chat ao vivo
• E-mail prioritário
• Telefone direto
• Video chamada
• WhatsApp Business

📈 Diferenciais:
• Base de conhecimento
• Tutoriais em vídeo
• Dashboard de status
• Relatórios mensais
• Manutenção preventiva

Como podemos ajudar você agora?`;
      }
      else if (lowercaseInput.includes("portfolio") || lowercaseInput.includes("projeto") || lowercaseInput.includes("case")) {
        responseText = `🌟 Conheça nossos projetos de sucesso:

🏆 Cases Recentes:
• App de Delivery: +2M downloads
• E-commerce B2B: R$50M/mês
• Sistema ERP: 500+ empresas
• App Educacional: 1M+ usuários
• Fintech: +R$100M processados

💡 Diferenciais:
• UX/UI premium
• Performance otimizada
• Escalabilidade
• Inovação constante
• Resultados comprovados

🎯 Setores:
• Varejo
• Educação
• Saúde
• Finanças
• Logística

Quer conhecer cases específicos do seu setor?`;
      }
      else {
        responseText = `Olá ${userInfo.firstName}! 

💫 Agradecemos seu interesse em nossos serviços!

👨‍💼 Um especialista entrará em contato através do email ${userInfo.email} em até 24h úteis.

📱 Enquanto isso, você pode:
• Explorar nosso portfólio
• Conhecer casos de sucesso
• Ver demonstrações
• Agendar uma reunião
• Solicitar orçamento

🔍 Temas populares:
1. Desenvolvimento Web
2. Apps Mobile
3. E-commerce
4. Sistemas Empresariais
5. Consultoria Tech

Como posso ajudar mais?`;
      }

      const botResponse: ChatMessage = {
        text: responseText,
        isBot: true,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => {
        const updatedMessages = [...prev, botResponse];
        
        const conversation: Conversation = {
          userInfo,
          messages: updatedMessages,
        };
        
        saveToServer(conversation).catch(() => saveToLocalStorage(conversation));
        
        return updatedMessages;
      });
    }, 1000);
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700 
                     text-white p-4 rounded-full shadow-lg hover:shadow-xl 
                     transition-all duration-500 hover:scale-110
                     group relative animate-bounce"
          >
            <MessageSquare className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-12 right-0 bg-white px-4 py-2 rounded-full 
                         text-sm font-medium text-blue-600 shadow-lg opacity-0 
                         group-hover:opacity-100 transition-opacity duration-300 
                         whitespace-nowrap">
              Precisa de ajuda? <Sparkles className="w-4 h-4 inline-block ml-1" />
            </span>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 
                     animate-[fadeIn_0.3s_ease-out]">
          <div className="fixed bottom-0 right-0 w-full md:w-[400px] h-full md:h-[600px] 
                       bg-white shadow-2xl transition-all duration-500 rounded-t-[2rem]
                       animate-[slideIn_0.5s_ease-out] overflow-hidden">
            <div className="flex items-center justify-between p-4 bg-gradient-to-br 
                          from-purple-600 via-blue-600 to-blue-700 text-white 
                          rounded-t-[2rem]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center 
                              justify-center backdrop-blur-sm group">
                  <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </div>
                <div>
                  <h3 className="font-semibold flex items-center gap-2">
                    Assistente Virtual
                    <Star className="w-4 h-4 text-yellow-300 animate-pulse" />
                  </h3>
                  <span className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Online agora
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-2
                         hover:rotate-90 duration-300 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-[calc(100%-128px)] overflow-y-auto p-4 space-y-4 
                          bg-gradient-to-b from-blue-50/50 to-white">
              {showForm ? (
                <form onSubmit={handleFormSubmit} className="space-y-4 bg-white p-6 
                                                           rounded-2xl shadow-sm animate-fadeIn">
                  <div className="text-center mb-6">
                    <h4 className="font-bold text-gray-800 text-lg">Bem-vindo à GV Software!</h4>
                    <p className="text-sm text-gray-500 mt-2">
                      Para um atendimento personalizado de alto nível, conte-nos um pouco sobre você:
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Seu nome"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                                 focus:border-blue-500 transition-all"
                        required
                      />
                      <span className="absolute left-3 top-3.5 text-gray-400">👤</span>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Seu sobrenome"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                                 focus:border-blue-500 transition-all"
                        required
                      />
                      <span className="absolute left-3 top-3.5 text-gray-400">📝</span>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Seu email profissional"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                                 focus:border-blue-500 transition-all"
                        required
                      />
                      <span className="absolute left-3 top-3.5 text-gray-400">📧</span>
                    </div>
                    <div className="relative">
                      <textarea
                        placeholder="Como podemos ajudar seu negócio?"
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                                 focus:border-blue-500 transition-all resize-none h-24"
                        required
                      />
                      <span className="absolute left-3 top-3.5 text-gray-400">💼</span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-blue-700 
                             text-white py-3 rounded-xl hover:shadow-lg transition-all duration-300 
                             transform hover:-translate-y-1 font-medium flex items-center 
                             justify-center gap-2"
                  >
                    <span>Iniciar Atendimento Premium</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.isBot ? "justify-start" : "justify-end"
                      } animate-fadeIn`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-2xl ${
                          message.isBot
                            ? "bg-gradient-to-br from-blue-50 to-white text-gray-800 shadow-sm border border-blue-100"
                            : "bg-gradient-to-r from-purple-600 via-blue-600 to-blue-700 text-white"
                        } transform transition-all duration-300 hover:scale-[1.02]`}
                      >
                        <p className="whitespace-pre-line">{message.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {!showForm && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
                <form onSubmit={handleChatSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-xl 
                             focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                             focus:border-blue-500 transition-all"
                  />
                  <button
                    type="submit"
                    className="p-3 bg-gradient-to-r from-purple-600 via-blue-600 to-blue-700 
                             text-white rounded-xl hover:shadow-lg transition-all duration-300 
                             disabled:opacity-50 disabled:cursor-not-allowed transform 
                             hover:scale-105"
                    disabled={!input.trim()}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
