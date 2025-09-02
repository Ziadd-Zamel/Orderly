export const places = [
  {
    id: 1,
    productImg: "/assets/images/place-demo.png",
    restaurantImg: "/assets/images/resturant.png",
    name: "Vinny’s Pizza",
  },
  {
    id: 2,
    productImg: "/assets/images/place-demo.png",
    restaurantImg: "/assets/images/resturant.png",
    name: "Vinny’s Pizza",
  },
  {
    id: 3,
    productImg: "/assets/images/place-demo.png",
    restaurantImg: "/assets/images/resturant.png",
    name: "Vinny’s Pizza",
  },
  {
    id: 4,
    productImg: "/assets/images/place-demo.png",
    restaurantImg: "/assets/images/resturant.png",
    name: "Vinny’s Pizza",
  },
  {
    id: 5,
    productImg: "/assets/images/place-demo.png",
    restaurantImg: "/assets/images/resturant.png",
    name: "Vinny’s Pizza",
  },
  {
    id: 6,
    productImg: "/assets/images/place-demo.png",
    restaurantImg: "/assets/images/resturant.png",
    name: "Vinny’s Pizza",
  },
];
interface OpeningHour {
  day: string;
  timeFrom: string;
  timeTo: string;
  isOpen: boolean;
}

export const openingHours: OpeningHour[] = [
  {
    day: "Saturday",
    timeFrom: "1970-01-01T08:00:00",
    timeTo: "1970-01-01T20:00:00",
    isOpen: true,
  },
  {
    day: "Sunday",
    timeFrom: "1970-01-01T09:00:00",
    timeTo: "1970-01-01T18:00:00",
    isOpen: true,
  },
  {
    day: "Monday",
    timeFrom: "1970-01-01T08:00:00",
    timeTo: "1970-01-01T20:00:00",
    isOpen: true,
  },
  {
    day: "Tuesday",
    timeFrom: "1970-01-01T08:00:00",
    timeTo: "1970-01-01T20:00:00",
    isOpen: true,
  },
  {
    day: "Wednesday",
    timeFrom: "1970-01-01T08:00:00",
    timeTo: "1970-01-01T20:00:00",
    isOpen: true,
  },
  {
    day: "Friday",
    timeFrom: "1970-01-01T08:00:00",
    timeTo: "1970-01-01T18:00:00",
    isOpen: true,
  },
];

export const branches = [
  {
    name: "Masr El Gedida",
    address: "18 El-Nozha Street, Building 42 – Third Floor Apartment",
  },
  {
    name: "Downtown Cairo",
    address: "15 Talaat Harb Street, Near Opera Square",
  },
  {
    name: "Zamalek",
    address: "12 Brazil Street, Apartment 5",
  },
  {
    name: "Maadi",
    address: "12 Brazil Street, Apartment 5",
  },
];
