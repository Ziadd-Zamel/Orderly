"use client";

import type React from "react";
import { cn } from "@/lib/utils";

// Helper function to get next 7 days
const getNext7Days = () => {
  const today = new Date();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    return {
      id: date.toISOString().split("T")[0], // YYYY-MM-DD format
      dayName: dayNames[date.getDay()],
      dayNumber: date.getDate(),
      month: monthNames[date.getMonth()],
      fullDate: date,
      isToday: i === 0,
    };
  });
};

interface DateSelectorProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ selectedDate, setSelectedDate }) => {
  const days = getNext7Days();

  const handleDateSelect = (dateId: string) => {
    setSelectedDate(dateId);
  };

  return (
    <div className="w-full mx-auto space-y-6">
      <div className="flex gap-1 p-1 min-h-28 bg-main rounded-2xl overflow-hidden">
        {days.map((day) => (
          <button
            key={day.id}
            type="button"
            onClick={() => handleDateSelect(day.id)}
            className={`group flex-1 flex flex-col items-center justify-center py-3 px-2 rounded-full transition-all duration-200 cursor-pointer ${
              selectedDate === day.id
                ? "bg-white text-zinc-800 shadow-md"
                : "bg-transparent text-gray-700"
            }`}
          >
            <span
              className={cn("text-xl font-medium font-poppins mb-1", {
                "text-zinc-300": !selectedDate || selectedDate !== day.id,
                "text-zinc-400": selectedDate === day.id,
              })}
            >
              {day.dayName}
            </span>
            <span
              className={cn("text-xl font-medium font-poppins", {
                "text-zinc-50": !selectedDate || selectedDate !== day.id,
                "text-zinc-800": selectedDate === day.id,
              })}
            >
              {day.dayNumber}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DateSelector;
