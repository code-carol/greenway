import React from "react";
import { PointOfInterest } from "../../src/types/map";
import { getPoiColor } from "../../src/data/pointsOfInterest";

interface PoiMarkerProps {
  poi: PointOfInterest;
  isSelected: boolean;
  onClick: (event: React.MouseEvent, poi: PointOfInterest) => void;
  isMobile?: boolean;
}

const PoiMarker: React.FC<PoiMarkerProps> = ({
  poi,
  isSelected,
  onClick,
  isMobile = false,
}) => {
  const position = isMobile ? poi.position.mobile : poi.position.desktop;

  return (
    <div
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-125 ${
        isSelected ? "scale-125 z-10" : "z-5"
      }`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      onClick={(e) => onClick(e, poi)}
    >
      <div
        className="w-7 h-7 rounded-full border-2 border-black shadow-lg flex items-center justify-center"
        style={{ backgroundColor: getPoiColor(poi.type) }}
      >
        <div className="w-2 h-2 bg-black rounded-full"></div>
      </div>
      {isSelected && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg whitespace-nowrap text-xs font-medium z-20">
          {poi.name}
        </div>
      )}
    </div>
  );
};

export default PoiMarker;
