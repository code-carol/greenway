export interface PointOfInterest {
  id: number;
  name: string;
  description: string;
  type: "light" | "cafe" | "amenity" | "exit";
  position: {
    desktop: {
      x: number;
      y: number;
    };
    mobile: {
      x: number;
      y: number;
    };
  };
}

export interface Filters {
  lights: boolean;
  cafes: boolean;
  amenities: boolean;
  exits: boolean;
}
