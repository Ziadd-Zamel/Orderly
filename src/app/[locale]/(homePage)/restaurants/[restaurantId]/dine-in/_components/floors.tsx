"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface FloorsProps {
  selectedFloor: number;
  setSelectedFloor: React.Dispatch<React.SetStateAction<number>>;
}

const Floors: React.FC<FloorsProps> = ({ selectedFloor, setSelectedFloor }) => {
  // Translation
  const t = useTranslations();

  // Variables
  const floors = [
    { id: "1st-floor", floor: 1 },
    { id: "2nd-floor", floor: 2 },
    { id: "out-doors", floor: 3 },
  ];

  return (
    <div className="flex items-center gap-4">
      {floors.map(({ id, floor }) => (
        <button
          key={id}
          type="button"
          className={cn("px-4 py-3 rounded-4xl transition duration-200 cursor-pointer", {
            "bg-gray-100 text-zinc-500": selectedFloor !== floor,
            "opacity-100 bg-main genz:bg-purple-500 text-white": selectedFloor === floor,
          })}
          onClick={() => setSelectedFloor(floor)}
          aria-label={t(id)}
        >
          {t(id)}
        </button>
      ))}
    </div>
  );
};

export default Floors;
