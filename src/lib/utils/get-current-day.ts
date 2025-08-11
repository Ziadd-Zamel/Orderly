import { openingHours } from "../constants/data.constant";

export const getCurrentDay = () => {
  const today = new Date();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = dayNames[today.getDay()];
  const currentDayExists = openingHours.find((hour) => hour.day === currentDay);
  return currentDayExists ? currentDay : openingHours[0].day;
};
