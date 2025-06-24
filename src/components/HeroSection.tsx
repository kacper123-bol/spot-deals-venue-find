
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Percent } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Znajdź idealne miejsce
            <span className="block text-yellow-300">w świetnej cenie</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Odkryj niesamowite lokale z rabatami do 50% na ostatnie wolne terminy
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <MapPin className="w-5 h-5 text-yellow-300" />
              <span>Cała Polska</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-yellow-300" />
              <span>Dostępne dziś</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Percent className="w-5 h-5 text-yellow-300" />
              <span>Rabaty do 50%</span>
            </div>
          </div>
          
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-200">
            Przeglądaj Oferty
          </Button>
        </div>
      </div>
    </div>
  );
};
