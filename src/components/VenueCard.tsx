
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Clock } from "lucide-react";

interface Venue {
  id: number;
  name: string;
  type: string;
  location: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  capacity: number;
  image: string;
  description: string;
  availableSlots: string[];
}

interface VenueCardProps {
  venue: Venue;
}

export const VenueCard = ({ venue }: VenueCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border-gray-100 rounded-3xl minimal-shadow hover:minimal-shadow-lg">
      <div className="relative">
        <img
          src={venue.image}
          alt={venue.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-4 right-4 gradient-pink text-white border-0 px-3 py-1 rounded-full font-medium">
          -{venue.discount}%
        </Badge>
        <Badge className="absolute top-4 left-4 bg-black/80 text-white border-0 px-3 py-1 rounded-full">
          {venue.type}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-black mb-3 line-clamp-1">{venue.name}</h3>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{venue.location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4" />
            <span className="text-sm">Up to {venue.capacity} people</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{venue.description}</p>
        
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-4 h-4 text-orange-500" />
          <div className="text-sm">
            <div className="flex flex-wrap gap-1 mt-1">
              {venue.availableSlots.slice(0, 2).map((slot, index) => (
                <Badge key={index} variant="outline" className="text-xs border-gray-200 text-gray-600 rounded-lg">
                  {slot}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-black">${venue.discountedPrice}</span>
            <span className="text-sm text-gray-500 line-through">${venue.originalPrice}</span>
          </div>
        </div>
        
        <Button className="w-full gradient-orange hover:opacity-90 text-white border-0 py-3 rounded-xl font-medium transition-all duration-200">
          Book now
        </Button>
      </CardContent>
    </Card>
  );
};
