
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { VenueCard } from "@/components/VenueCard";
import { HeroSection } from "@/components/HeroSection";
import { FilterBar } from "@/components/FilterBar";

const mockVenues = [
  {
    id: 1,
    name: "Cafe Milano",
    type: "Kawiarnia",
    location: "Warszawa, Śródmieście",
    originalPrice: 120,
    discountedPrice: 80,
    discount: 33,
    capacity: 40,
    image: "/placeholder.svg",
    description: "Przytulna kawiarnia w centrum miasta z atmosferą włoskiego bistro",
    availableSlots: ["14:00-16:00", "20:00-22:00"]
  },
  {
    id: 2,
    name: "Sala Eventowa Crystal",
    type: "Sala eventowa",
    location: "Kraków, Kazimierz",
    originalPrice: 500,
    discountedPrice: 300,
    discount: 40,
    capacity: 120,
    image: "/placeholder.svg",
    description: "Elegancka sala idealna na konferencje i wydarzenia biznesowe",
    availableSlots: ["18:00-23:00"]
  },
  {
    id: 3,
    name: "Pub Stary Port",
    type: "Pub",
    location: "Gdańsk, Stare Miasto",
    originalPrice: 200,
    discountedPrice: 140,
    discount: 30,
    capacity: 60,
    image: "/placeholder.svg",
    description: "Klimatyczny pub z widokiem na Motławę, idealny na prywatne imprezy",
    availableSlots: ["15:00-18:00", "21:00-24:00"]
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <HeroSection />
      
      <div className="container mx-auto px-4 py-8">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        <FilterBar 
          selectedType={selectedType}
          selectedLocation={selectedLocation}
          onTypeChange={setSelectedType}
          onLocationChange={setSelectedLocation}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredVenues.map(venue => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
        
        {filteredVenues.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Brak wyników dla podanych kryteriów</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
