import React from "react";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";

interface MapFiltersProps {
  filters: {
    lights: boolean;
    cafes: boolean;
    amenities: boolean;
    exits: boolean;
  };
  onFilterChange: (filter: string) => void;
}

// Color mapping for different POI types
const getPoiColor = (type: string) => {
  switch (type) {
    case "light":
      return "#FFD700"; // Gold
    case "cafe":
      return "#50cdff"; // Blue
    case "amenity":
      return "#CF9FFF"; // Purple
    case "exit":
      return "#FF6347"; // Tomato Red
    default:
      return "#40b14a";
  }
};

const MapFilters = ({ filters, onFilterChange }: MapFiltersProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-medium mb-4 text-gray-700">
        Filter Points of Interest
      </h3>

      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="lights"
            checked={filters.lights}
            onCheckedChange={() => onFilterChange("lights")}
          />
          <div className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: getPoiColor("light") }}
            ></div>
            <Label
              htmlFor="lights"
              className="cursor-pointer"
            >
              Lights
            </Label>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="cafes"
            checked={filters.cafes}
            onCheckedChange={() => onFilterChange("cafes")}
          />
          <div className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: getPoiColor("cafe") }}
            ></div>
            <Label
              htmlFor="cafes"
              className="cursor-pointer"
            >
              Cafes
            </Label>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="amenities"
            checked={filters.amenities}
            onCheckedChange={() => onFilterChange("amenities")}
          />
          <div className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: getPoiColor("amenity") }}
            ></div>
            <Label
              htmlFor="amenities"
              className="cursor-pointer"
            >
              Amenities
            </Label>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="exits"
            checked={filters.exits}
            onCheckedChange={() => onFilterChange("exits")}
          />
          <div className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: getPoiColor("exit") }}
            ></div>
            <Label
              htmlFor="exits"
              className="cursor-pointer"
            >
              Exits
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapFilters;
