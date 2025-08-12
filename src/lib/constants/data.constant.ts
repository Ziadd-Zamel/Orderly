import { BiSolidUser } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { HiMiniMapPin } from "react-icons/hi2";
import { MdPeopleOutline } from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { IconType } from "react-icons/lib";

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
  time: string;
  isOpen: boolean;
}

export const openingHours: OpeningHour[] = [
  { day: "Saturday", time: "10:00 AM - 12:00 PM", isOpen: true },
  { day: "Sunday", time: "9:00 AM - 6:00 PM", isOpen: true },
  { day: "Monday", time: "8:00 AM - 8:00 PM", isOpen: true },
  { day: "Tuesday", time: "8:00 AM - 8:00 PM", isOpen: true },
  { day: "Wednesday", time: "8:00 AM - 8:00 PM", isOpen: true },
  { day: "Friday", time: "8:00 AM - 6:00 PM", isOpen: true },
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

type MenuItem =
  | { label: string; icon: IconType; path: string; divider?: false }
  | { divider: true };
export const menuItems: MenuItem[] = [
  { label: "profile.myInfo", icon: BiSolidUser, path: "/profile" },
  { label: "profile.myOrders", icon: FaClipboardList, path: "/profile/orders" },
  { label: "profile.myPoints", icon: FaStar, path: "/profile/points" },
  { label: "profile.myAddresses", icon: HiMiniMapPin, path: "/profile/addresses" },
  { label: "profile.referEarn", icon: MdPeopleOutline, path: "/profile/refer" },
  { divider: true },
  { label: "profile.accountSettings", icon: IoSettingsSharp, path: "/profile/settings" },
  { label: "profile.termsConditions", icon: BsFillShieldLockFill, path: "/profile/terms" },
];
