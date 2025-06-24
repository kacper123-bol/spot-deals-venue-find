
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Clock, Star } from "lucide-react";

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
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={venue.image}
            alt={venue.name}
            className="w-full h-48 object-cover"
          />
          <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white font-bold">
            -{venue.discount}%
          </Badge>
          <Badge className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700 text-white">
            {venue.type}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 line-clamp-1">{venue.name}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">4.8</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{venue.location}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <Users className="w-4 h-4" />
          <span className="text-sm">Do {venue.capacity} osób</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{venue.description}</p>
        
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-4 h-4 text-blue-600" />
          <div className="text-sm">
            <span className="font-medium">Dostępne:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {venue.availableSlots.map((slot, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {slot}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-green-600">{venue.discountedPrice} zł</span>
            <span className="text-sm text-gray-500 line-through ml-2">{venue.originalPrice} zł</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 rounded-lg transform hover:scale-105 transition-all duration-200">
          Zarezerwuj teraz
        </Button>
      </CardFooter>
    </Card>
  );
};
