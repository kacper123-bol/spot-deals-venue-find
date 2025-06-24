
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10"></div>
      <div className="relative container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-gray-300">Marketplace for venues</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-light mb-6 tracking-tight">
            Find perfect
            <span className="block font-medium bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              venues
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Connect with venues offering last-minute availability at exceptional prices
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 px-8 py-4 h-auto text-lg font-medium rounded-xl group"
            >
              Browse venues
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/5 px-8 py-4 h-auto text-lg font-medium rounded-xl backdrop-blur-sm"
            >
              List your venue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
