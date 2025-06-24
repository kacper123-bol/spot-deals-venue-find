
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Percent } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-700 via-orange-800 to-orange-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Find the perfect venue
            <span className="block text-orange-300">at great prices</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Discover amazing venues with discounts up to 50% on last-minute bookings
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <MapPin className="w-5 h-5 text-orange-300" />
              <span>Nationwide</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-orange-300" />
              <span>Available today</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Percent className="w-5 h-5 text-orange-300" />
              <span>Up to 50% off</span>
            </div>
          </div>
          
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-200">
            Browse Offers
          </Button>
        </div>
      </div>
    </div>
  );
};
