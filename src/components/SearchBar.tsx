
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Szukaj lokali, miast lub typów miejsc..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 rounded-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
        />
      </div>
    </div>
  );
};
