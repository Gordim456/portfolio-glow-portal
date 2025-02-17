
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

const initialBotMessage = `👋 Olá! Bem-vindo à GV Software!

🚀 Como podemos impulsionar seu negócio hoje?

Especialidades:
✨ Desenvolvimento Web Premium
💼 Sistemas Empresariais Personalizados
🎯 Consultoria Estratégica em Tecnologia
🛠️ Suporte Técnico Especializado
💡 Inovação Digital
📊 Análise de Dados

🏆 Benefícios:
• +250 Projetos Entregues com Sucesso
• +100 Clientes Satisfeitos
• 98% Taxa de Satisfação
• Equipe Especializada
• Suporte 24/7
• Tecnologias de Ponta

📅 Quer conversar sobre seu projeto? 
Estamos prontos para transformar suas ideias em realidade!`;

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
      
      if (lowercaseInput.includes("preço") || lowercaseInput.includes("custo") || lowercaseInput.includes("valor")) {
        responseText = `Obrigado pelo interesse! Para fornecer um orçamento preciso, precisamos entender melhor seu projeto. 
        
Podemos agendar uma reunião para discutir:
• Requisitos do projeto
• Prazo desejado
• Funcionalidades necessárias
• Integrações requeridas

Como prefere fazer esta reunião?
1. Video chamada
2. Presencial
3. Ligação telefônica`;
      } 
      else if (lowercaseInput.includes("prazo") || lowercaseInput.includes("tempo")) {
        responseText = `O prazo de desenvolvimento varia conforme a complexidade do projeto. 

Fatores que consideramos:
• Escopo do projeto
• Número de funcionalidades
• Complexidade das integrações
• Requisitos técnicos

Podemos fazer uma análise detalhada e fornecer um cronograma preciso após nossa primeira reunião.`;
      }
      else if (lowercaseInput.includes("reunião") || lowercaseInput.includes("conversar")) {
        responseText = `Ótimo! Podemos agendar uma reunião para entender melhor suas necessidades.

Horários disponíveis:
• Segunda a Sexta: 9h às 18h
• Sábado: 9h às 12h

Por favor, indique sua preferência de:
1. Data e horário
2. Formato (presencial/online)
3. Melhor contato`;
      }
      else {
        responseText = `Obrigado pelo contato, ${userInfo.firstName}! 

Para melhor atendê-lo, nossa equipe especializada entrará em contato através do email ${userInfo.email} em até 24 horas úteis.

Enquanto isso, você pode:
• Conhecer nosso portfólio de projetos
• Ver casos de sucesso de nossos clientes
• Explorar nossas soluções tecnológicas`;
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
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-br from-purple-600 via-blue-600 
                     to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl 
                     transition-all duration-500 hover:scale-110 z-50 animate-bounce 
                     group relative"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute -top-12 right-0 bg-white px-4 py-2 rounded-full 
                         text-sm font-medium text-blue-600 shadow-lg opacity-0 
                         group-hover:opacity-100 transition-opacity duration-300 
                         whitespace-nowrap">
            Fale Conosco! <Sparkles className="w-4 h-4 inline-block ml-1" />
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 
                      transition-all duration-500 animate-[fadeIn_0.5s_ease-out]">
          <div className="fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl 
                        border border-blue-100 animate-[slideIn_0.5s_ease-out] z-50">
            <div className="flex items-center justify-between p-4 bg-gradient-to-br 
                          from-purple-600 via-blue-600 to-blue-700 text-white rounded-t-2xl">
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
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Online agora
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors 
                         hover:rotate-90 duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-[500px] overflow-y-auto p-4 space-y-4 bg-gradient-to-b 
                          from-blue-50/50 to-white">
              {showForm ? (
                <form onSubmit={handleFormSubmit} className="space-y-4 bg-white p-6 
                                                           rounded-xl shadow-sm animate-fadeIn">
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
                        className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-lg 
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
                        className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-lg 
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
                        className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-lg 
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
                        className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-lg 
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
                             text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 
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
                        } ${
                          message.isBot
                            ? "rounded-tl-sm"
                            : "rounded-tr-sm"
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
              <form onSubmit={handleChatSubmit} className="p-4 bg-white rounded-b-2xl 
                                                         border-t border-gray-100">
                <div className="flex gap-2">
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
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
