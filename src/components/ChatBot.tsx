import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

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
    
    const initialMessage: ChatMessage = { 
      text: `Olá ${formData.firstName}! Como posso ajudar você hoje?\n\nPosso auxiliar com:\n• Informações sobre nossos serviços\n• Orçamentos\n• Suporte técnico\n• Agendamento de reuniões`, 
      isBot: true,
      timestamp: new Date().toISOString()
    };

    setMessages([initialMessage]);

    const conversation: Conversation = {
      userInfo: formData,
      messages: [initialMessage],
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
      let responseText = `Obrigado pelo contato, ${userInfo.firstName}! Um de nossos especialistas entrará em contato através do email ${userInfo.email} para fornecer todas as informações necessárias.`;
      
      if (input.toLowerCase().includes("preço") || input.toLowerCase().includes("custo") || input.toLowerCase().includes("valor")) {
        responseText = "Os valores são personalizados de acordo com as necessidades de cada projeto. Podemos agendar uma reunião para discutir os detalhes?";
      } else if (input.toLowerCase().includes("prazo") || input.toLowerCase().includes("tempo")) {
        responseText = "O prazo de desenvolvimento varia conforme a complexidade do projeto. Podemos fazer uma análise detalhada para fornecer uma estimativa precisa.";
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
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 z-50 group"
      >
        <MessageSquare className="w-6 h-6 animate-pulse" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300 animate-fadeIn">
          <div className="fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 animate-slideIn z-50">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Assistente GV Software</h3>
                  <span className="text-xs text-white/80">Online</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors hover:rotate-90 duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {showForm ? (
                <form onSubmit={handleFormSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-sm animate-fadeIn">
                  <h4 className="font-medium text-gray-700 text-lg">Para melhor atendê-lo, por favor preencha:</h4>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Seu nome"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Seu sobrenome"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Seu email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                      required
                    />
                    <textarea
                      placeholder="Motivo do contato"
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none h-24"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg font-medium"
                  >
                    Iniciar Conversa
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
                            ? "bg-white text-gray-800 shadow-sm"
                            : "bg-primary text-white"
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
              <form onSubmit={handleChatSubmit} className="p-4 bg-white rounded-b-2xl border-t border-gray-100">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="p-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-lg"
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
