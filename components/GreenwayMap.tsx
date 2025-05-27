import React, { useState, useRef } from "react";
import { PointOfInterest, Filters } from "../src/types/map";
import { pointsOfInterest } from "../src/data/pointsOfInterest";
import MapFilters from "./MapFilters";
import MapSearch from "./map/MapSearch";
import PoiMarker from "./map/PoiMarker";
import PoiInfoCard from "./map/PoiInfoCard";

const GreenwayMap: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    lights: true,
    cafes: true,
    amenities: true,
    exits: true,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPoi, setSelectedPoi] = useState<PointOfInterest | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const mapRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFilterChange = (filter: string) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter as keyof typeof prev],
    }));
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const foundPoi = pointsOfInterest.find((poi) =>
      poi.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (foundPoi) {
      setSelectedPoi(foundPoi);
    }
  };

  const handlePoiClick = (event: React.MouseEvent, poi: PointOfInterest) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedPoi(selectedPoi?.id === poi.id ? null : poi);
  };

  const handleMapClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setSelectedPoi(null);
    }
  };

  const filteredPoints = pointsOfInterest.filter((poi) => {
    const typeFilter =
      filters[`${poi.type}s` as keyof typeof filters] ||
      (poi.type === "amenity" && filters.amenities);
    const searchFilter =
      searchTerm === "" ||
      poi.name.toLowerCase().includes(searchTerm.toLowerCase());
    return typeFilter && searchFilter;
  });

  return (
    <div className="grid md:grid-cols-4 gap-4">
      <div className="space-y-4">
        <MapSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onSearch={handleSearch}
        />

        <MapFilters
          filters={filters}
          onFilterChange={handleFilterChange}
        />
      </div>

      <div className="md:col-span-3">
        <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
          <div
            className="map-container relative rounded-lg cursor-pointer"
            ref={mapRef}
            onClick={handleMapClick}
            style={{
              backgroundImage: "url(/greenway.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {filteredPoints.map((poi) => (
              <PoiMarker
                key={poi.id}
                poi={poi}
                isSelected={selectedPoi?.id === poi.id}
                onClick={handlePoiClick}
                isMobile={isMobile}
              />
            ))}
          </div>

          {selectedPoi && (
            <PoiInfoCard
              poi={selectedPoi}
              onClose={() => setSelectedPoi(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GreenwayMap;
