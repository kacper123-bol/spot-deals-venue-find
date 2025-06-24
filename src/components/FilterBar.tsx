
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
    <div className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto mt-8">
      <div className="flex-1">
        <Select value={selectedType} onValueChange={onTypeChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Typ lokalu" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Wszystkie typy</SelectItem>
            <SelectItem value="Kawiarnia">Kawiarnia</SelectItem>
            <SelectItem value="Restauracja">Restauracja</SelectItem>
            <SelectItem value="Pub">Pub</SelectItem>
            <SelectItem value="Sala eventowa">Sala eventowa</SelectItem>
            <SelectItem value="Club">Club</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex-1">
        <Select value={selectedLocation} onValueChange={onLocationChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Lokalizacja" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Wszystkie miasta</SelectItem>
            <SelectItem value="Warszawa">Warszawa</SelectItem>
            <SelectItem value="Kraków">Kraków</SelectItem>
            <SelectItem value="Gdańsk">Gdańsk</SelectItem>
            <SelectItem value="Wrocław">Wrocław</SelectItem>
            <SelectItem value="Poznań">Poznań</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
