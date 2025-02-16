
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Tecnologia de Ponta",
    subtitle: "Soluções modernas para desafios complexos"
  },
  {
    url: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    title: "Desenvolvimento Ágil",
    subtitle: "Metodologias modernas para resultados eficientes"
  },
  {
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Inovação Digital",
    subtitle: "Transformando ideias em realidade"
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "Equipe Especializada",
    subtitle: "Profissionais altamente qualificados"
  }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <div className="container mx-auto h-full flex items-center justify-center text-white">
              <div className="text-center max-w-4xl px-4 transform transition-all duration-700 
                            translate-y-0 opacity-100">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent 
                             bg-gradient-to-r from-white to-white/80 animate-fadeIn">
                  {image.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fadeIn delay-200">
                  {image.subtitle}
                </p>
                <div className="flex gap-4 justify-center animate-fadeIn delay-300">
                  <a
                    href="#contact"
                    className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 
                             transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Fale Conosco
                  </a>
                  <a
                    href="#portfolio"
                    className="px-8 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 
                             backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                  >
                    Ver Projetos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 
                   backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 
                   backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-110 
                      ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
