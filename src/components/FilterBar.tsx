
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterBarProps {
  selectedType: string;
  selectedLocation: string;
  onTypeChange: (value: string) => void;
  onLocationChange: (value: string) => void;
}

export const FilterBar = ({ 
  selectedType, 
  selectedLocation, 
  onTypeChange, 
  onLocationChange 
}: FilterBarProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
      <div className="flex-1">
        <Select value={selectedType} onValueChange={onTypeChange}>
          <SelectTrigger className="h-12 rounded-xl border-gray-200 minimal-shadow bg-white">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent className="bg-white border-gray-200 minimal-shadow-lg">
            <SelectItem value="all">All types</SelectItem>
            <SelectItem value="Cafe">Cafe</SelectItem>
            <SelectItem value="Restaurant">Restaurant</SelectItem>
            <SelectItem value="Pub">Pub</SelectItem>
            <SelectItem value="Event Hall">Event Hall</SelectItem>
            <SelectItem value="Club">Club</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex-1">
        <Select value={selectedLocation} onValueChange={onLocationChange}>
          <SelectTrigger className="h-12 rounded-xl border-gray-200 minimal-shadow bg-white">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent className="bg-white border-gray-200 minimal-shadow-lg">
            <SelectItem value="all">All cities</SelectItem>
            <SelectItem value="Warsaw">Warsaw</SelectItem>
            <SelectItem value="Krakow">Krakow</SelectItem>
            <SelectItem value="Gdansk">Gdansk</SelectItem>
            <SelectItem value="Wroclaw">Wroclaw</SelectItem>
            <SelectItem value="Poznan">Poznan</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
