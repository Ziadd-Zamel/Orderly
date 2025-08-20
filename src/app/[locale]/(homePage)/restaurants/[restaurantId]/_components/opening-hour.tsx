/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { getCurrentDay } from "@/lib/utils/get-current-day";
import { openingHours } from "@/lib/constants/data.constant";

export default function OpeningHours() {
  const [activeDay, setActiveDay] = useState(() => getCurrentDay());

  return (
    <div className="w-full box-container mt-20">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900">
        Opening hours
      </h2>

      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 sm:h-20 items-center justify-center">
        {openingHours.map((hour) => (
          <div
            key={hour.day}
            className={cn(
              " w-full sm:min-w-1/7 sm:w-fit p-2 text-sm sm:p-3 flex-center rounded-xl",
              activeDay === hour.day
                ? "bg-[#12957514] genz:bg-[#A259FF1A] text-main 00 genz:text-gradient hover:text-main genz:hover:text-gradient"
                : "bg-[#EEEEEE4F] text-zinc-950 ",
            )}
          >
            <span className="flex items-center gap-2 sm:gap-3 sm:text-base xl:text-xl ">
              <span className="font-medium">{hour.day}</span>
              {activeDay === hour.day && (
                <span className="text-zinc-700 font-normal">{hour.time}</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
