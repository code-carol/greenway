import React from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

interface MapSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onSearch: (event: React.FormEvent) => void;
}

const MapSearch: React.FC<MapSearchProps> = ({
  searchTerm,
  onSearchChange,
  onSearch,
}) => {
  return (
    <form
      onSubmit={onSearch}
      className="flex gap-2"
    >
      <Input
        type="text"
        placeholder="Search locations"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1"
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default MapSearch;
