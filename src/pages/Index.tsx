
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { VenueCard } from "@/components/VenueCard";
import { HeroSection } from "@/components/HeroSection";
import { FilterBar } from "@/components/FilterBar";

const mockVenues = [
  {
    id: 1,
    name: "Cafe Milano",
    type: "Cafe",
    location: "Warsaw, Downtown",
    originalPrice: 120,
    discountedPrice: 80,
    discount: 33,
    capacity: 40,
    image: "/placeholder.svg",
    description: "Cozy cafe in the city center with Italian bistro atmosphere and modern design",
    availableSlots: ["2:00-4:00 PM", "8:00-10:00 PM"]
  },
  {
    id: 2,
    name: "Crystal Event Hall",
    type: "Event Hall",
    location: "Krakow, Kazimierz",
    originalPrice: 500,
    discountedPrice: 300,
    discount: 40,
    capacity: 120,
    image: "/placeholder.svg",
    description: "Elegant hall perfect for conferences and business events with state-of-the-art facilities",
    availableSlots: ["6:00-11:00 PM"]
  },
  {
    id: 3,
    name: "Old Port Pub",
    type: "Pub",
    location: "Gdansk, Old Town",
    originalPrice: 200,
    discountedPrice: 140,
    discount: 30,
    capacity: 60,
    image: "/placeholder.svg",
    description: "Atmospheric pub with Motlawa river view, perfect for private parties and gatherings",
    availableSlots: ["3:00-6:00 PM", "9:00 PM-12:00 AM"]
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const filteredVenues = mockVenues.filter(venue => {
    const matchesSearch = venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         venue.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || venue.type === selectedType;
    const matchesLocation = selectedLocation === "all" || venue.location.includes(selectedLocation);
    
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <div className="container mx-auto px-6 py-16">
        <div className="space-y-8 mb-16">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <FilterBar 
            selectedType={selectedType}
            selectedLocation={selectedLocation}
            onTypeChange={setSelectedType}
            onLocationChange={setSelectedLocation}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVenues.map(venue => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
        
        {filteredVenues.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg font-light">No venues found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
