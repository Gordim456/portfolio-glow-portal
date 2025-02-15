
import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Olá! Sou o assistente virtual da GV Software. Como posso ajudar você hoje?", 
      isBot: true 
    },
    {
      text: "Posso ajudar com:",
      isBot: true
    },
    {
      text: "• Informações sobre nossos serviços\n• Orçamentos\n• Suporte técnico\n• Agendamento de reuniões",
      isBot: true
    }
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { text: input, isBot: false }]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      let response = "Agradeço seu contato! Um de nossos especialistas entrará em contato em breve para fornecer todas as informações necessárias.";
      
      // Simple keyword matching for better responses
      if (input.toLowerCase().includes("preço") || input.toLowerCase().includes("custo") || input.toLowerCase().includes("valor")) {
        response = "Os valores são personalizados de acordo com as necessidades de cada projeto. Podemos agendar uma reunião para discutir os detalhes?";
      } else if (input.toLowerCase().includes("prazo") || input.toLowerCase().includes("tempo")) {
        response = "O prazo de desenvolvimento varia conforme a complexidade do projeto. Podemos fazer uma análise detalhada para fornecer uma estimativa precisa.";
      }

      setMessages((prev) => [...prev, { text: response, isBot: true }]);
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
                placeholder="Digite sua mensagem..."
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

