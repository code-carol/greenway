import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { PointOfInterest } from "../../src/types/map";
import { getPoiColor } from "../../src/data/pointsOfInterest";

interface PoiInfoCardProps {
  poi: PointOfInterest;
  onClose: () => void;
}

const PoiInfoCard: React.FC<PoiInfoCardProps> = ({ poi, onClose }) => {
  return (
    <Card className="mt-4 animate-fade-in">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-greenway-800">
              {poi.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{poi.description}</p>
            <div
              className="mt-2 inline-flex items-center text-xs px-2 py-1 rounded-full text-white"
              style={{ backgroundColor: getPoiColor(poi.type) }}
            >
              <span className="capitalize">{poi.type}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            ×
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PoiInfoCard;
