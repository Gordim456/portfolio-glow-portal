
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    title: "Transformação Digital",
    subtitle: "Soluções inovadoras para seu negócio",
    gradient: "from-purple-900/90 via-blue-900/80 to-transparent"
  },
  {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    title: "Tecnologia de Ponta",
    subtitle: "Desenvolvimento com as últimas tecnologias",
    gradient: "from-blue-900/90 via-indigo-900/80 to-transparent"
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "Equipe Expert",
    subtitle: "Profissionais altamente qualificados",
    gradient: "from-indigo-900/90 via-violet-900/80 to-transparent"
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
    <div className="relative w-full h-[90vh] overflow-hidden bg-gray-900">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 transform
                     ${index === currentIndex ? "opacity-100 translate-x-0" : 
                     index < currentIndex ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"}`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${image.gradient} z-20`} />
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white 
                           animate-fade-up-delay [text-shadow:_2px_2px_10px_rgb(0_0_0_/_40%)]">
                  {image.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-up-delay-200">
                  {image.subtitle}
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-up-delay-300">
                  <a
                    href="#contact"
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                             text-white rounded-full hover:shadow-xl transition-all duration-300 
                             transform hover:scale-105 hover:from-blue-700 hover:to-purple-700 
                             flex items-center gap-2"
                  >
                    Iniciar Projeto
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#portfolio"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full 
                             hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    Ver Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 
                 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full 
                 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 
                 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full 
                 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-40">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-12 h-1 rounded-full transition-all duration-300 
                     ${index === currentIndex ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
