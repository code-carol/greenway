import { PointOfInterest } from "../types/map";

export const pointsOfInterest: PointOfInterest[] = [
  {
    id: 1,
    name: "Station Area",
    description:
      "Major transport hub with cafes and amenities near the Greenway start.",
    type: "cafe",
    position: {
      desktop: { x: 85, y: 80 },
      mobile: { x: 90, y: 70 },
    },
  },
  {
    id: 2,
    name: "High Street Exit",
    description:
      "Exit point connecting to Stratford High Street and public transport.",
    type: "exit",
    position: {
      desktop: { x: 75, y: 75 },
      mobile: { x: 80, y: 68 },
    },
  },
  {
    id: 3,
    name: "View Point",
    description:
      "Elevated viewing point with views of the historic Abbey Mills pumping station.",
    type: "amenity",
    position: {
      desktop: { x: 65, y: 70 },
      mobile: { x: 65, y: 68 },
    },
  },
  {
    id: 4,
    name: "Greenway Lighting Section",
    description:
      "Well-lit section of the path with solar-powered lights for evening walks.",
    type: "light",
    position: {
      desktop: { x: 55, y: 68 },
      mobile: { x: 50, y: 65 },
    },
  },
  {
    id: 5,
    name: "Rest Area",
    description: "Rest area with benches and views over East London.",
    type: "amenity",
    position: {
      desktop: { x: 45, y: 60 },
      mobile: { x: 40, y: 63 },
    },
  },
  {
    id: 6,
    name: "Town Exit",
    description: "Exit leading to Canning Town and local amenities.",
    type: "exit",
    position: {
      desktop: { x: 35, y: 45 },
      mobile: { x: 30, y: 58 },
    },
  },
  {
    id: 7,
    name: "Victoria Gardens",
    description: "Beautiful gardens area with cafe facilities.",
    type: "cafe",
    position: {
      desktop: { x: 25, y: 40 },
      mobile: { x: 20, y: 55 },
    },
  },
  {
    id: 8,
    name: "Path Lighting",
    description: "Enhanced lighting section near the Thames connection.",
    type: "light",
    position: {
      desktop: { x: 15, y: 38 },
      mobile: { x: 10, y: 50 },
    },
  },
];

export const getPoiColor = (type: string) => {
  switch (type) {
    case "light":
      return "#FFD700"; // Gold
    case "cafe":
      return "#50cdff"; // Brown
    case "amenity":
      return "#CF9FFF"; // Lime Green
    case "exit":
      return "#FF6347"; // Tomato Red
    default:
      return "#40b14a";
  }
};
