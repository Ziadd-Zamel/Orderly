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

  return (
    <div className="flex items-center gap-4">
      {/* First Floor */}
      <button
        type="button"
        className={cn("px-4 py-3 rounded-4xl transition duration-200 cursor-pointer", {
          "bg-gray-100 text-zinc-500": selectedFloor !== 1,
          "opacity-100 bg-main text-white": selectedFloor === 1,
        })}
        onClick={() => setSelectedFloor(1)}
        aria-label={t("1st-floor")}
      >
        {t("1st-floor")}
      </button>

      {/* Second Floor */}
      <button
        type="button"
        className={cn("px-4 py-3 rounded-4xl transition duration-200 cursor-pointer", {
          "bg-gray-100 text-zinc-500": selectedFloor !== 2,
          "opacity-100 bg-main text-white": selectedFloor === 2,
        })}
        onClick={() => setSelectedFloor(2)}
        aria-label={t("2nd-floor")}
      >
        {t("2nd-floor")}
      </button>

      {/* Out Doors */}
      <button
        type="button"
        className={cn("px-4 py-3 rounded-4xl transition duration-200 cursor-pointer", {
          "bg-gray-100 text-zinc-500": selectedFloor !== 3,
          "opacity-100 bg-main text-white": selectedFloor === 3,
        })}
        onClick={() => setSelectedFloor(3)}
        aria-label={t("out-doors")}
      >
        {t("out-doors")}
      </button>
    </div>
  );
};

export default Floors;
