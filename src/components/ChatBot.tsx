
import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  reason: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [currentField, setCurrentField] = useState<keyof UserInfo | null>("firstName");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { 
      text: "Olá! Para melhor atendê-lo, precisarei de algumas informações. Qual é o seu nome?", 
      isBot: true 
    }
  ]);

  const handleUserInfoInput = (value: string) => {
    if (!currentField) return;

    const newInfo = {
      ...(userInfo || {}),
      [currentField]: value,
    } as UserInfo;

    setUserInfo(newInfo);
    setInput("");

    let nextMessage = "";
    let nextField: keyof UserInfo | null = null;

    switch (currentField) {
      case "firstName":
        nextMessage = `Prazer em conhecê-lo, ${value}! Qual é o seu sobrenome?`;
        nextField = "lastName";
        break;
      case "lastName":
        nextMessage = "Ótimo! Agora preciso do seu e-mail para contato:";
        nextField = "email";
        break;
      case "email":
        nextMessage = "Por fim, qual o motivo do seu contato hoje?";
        nextField = "reason";
        break;
      case "reason":
        nextMessage = `Perfeito! Agora posso ajudá-lo melhor.\n\nPosso auxiliar com:\n• Informações sobre nossos serviços\n• Orçamentos\n• Suporte técnico\n• Agendamento de reuniões`;
        nextField = null;
        break;
    }

    setMessages(prev => [...prev, 
      { text: value, isBot: false },
      { text: nextMessage, isBot: true }
    ]);
    setCurrentField(nextField);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (currentField) {
      handleUserInfoInput(input.trim());
      return;
    }

    // Regular chat flow after collecting user info
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput("");

    setTimeout(() => {
      let response = `Obrigado pelo contato, ${userInfo?.firstName}! Um de nossos especialistas entrará em contato através do email ${userInfo?.email} para fornecer todas as informações necessárias.`;
      
      if (input.toLowerCase().includes("preço") || input.toLowerCase().includes("custo") || input.toLowerCase().includes("valor")) {
        response = "Os valores são personalizados de acordo com as necessidades de cada projeto. Podemos agendar uma reunião para discutir os detalhes?";
      } else if (input.toLowerCase().includes("prazo") || input.toLowerCase().includes("tempo")) {
        response = "O prazo de desenvolvimento varia conforme a complexidade do projeto. Podemos fazer uma análise detalhada para fornecer uma estimativa precisa.";
      }

      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 z-50"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 animate-slideIn z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-primary text-white rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Assistente GV Software</h3>
                <span className="text-xs text-white/80">Online</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? "bg-white text-gray-800 shadow-sm"
                      : "bg-primary text-white"
                  } ${
                    message.isBot
                      ? "rounded-tl-sm"
                      : "rounded-tr-sm"
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input form */}
          <form onSubmit={handleSubmit} className="p-4 bg-white rounded-b-2xl border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  currentField === "firstName" ? "Digite seu nome..." :
                  currentField === "lastName" ? "Digite seu sobrenome..." :
                  currentField === "email" ? "Digite seu email..." :
                  currentField === "reason" ? "Digite o motivo do contato..." :
                  "Digite sua mensagem..."
                }
                className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              <button
                type="submit"
                className="p-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!input.trim()}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
