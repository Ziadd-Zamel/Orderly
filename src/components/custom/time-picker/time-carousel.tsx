"use client";

import type React from "react";
import { useCallback } from "react";
import type { EmblaOptionsType } from "embla-carousel";
import { IosPickerItem } from "./picker-item";
import { cn } from "@/lib/utils";

type PropType = {
  loop?: EmblaOptionsType["loop"];
  initialHours?: number;
  initialMinutes?: number;
  initialPeriod?: "AM" | "PM"; // Changed to string
  onHoursChange?: (value: number) => void;
  onMinutesChange?: (value: number) => void;
  onPeriodChange?: (value: "AM" | "PM") => void; // Changed to string
};

const TimeWheelPicker: React.FC<PropType> = (props) => {
  const {
    loop,
    initialHours = 8, // Default to 8 for 12-hour format
    initialMinutes = 5,
    initialPeriod = "PM", // Default to PM
    onHoursChange,
    onMinutesChange,
    onPeriodChange,
  } = props;

  // Callbacks to update parent component
  const handleHoursSelect = useCallback(
    (index: number) => {
      const hourValue = index === 0 ? 12 : index; // Map 0 to 12, others as is
      onHoursChange?.(hourValue);
    },
    [onHoursChange],
  );

  const handleMinutesSelect = useCallback(
    (index: number) => {
      onMinutesChange?.(index);
    },
    [onMinutesChange],
  );

  const handlePeriodButtonClick = useCallback(
    (period: "AM" | "PM") => {
      onPeriodChange?.(period); // Directly pass the string
    },
    [onPeriodChange],
  );

  // For hours, if initialHours is 12, it should map to index 0. Otherwise, it's initialHours.
  const initialHoursIndex = initialHours === 12 ? 0 : initialHours;

  return (
    <div className="w-full max-w-[300px] flex items-center justify-center">
      <div className="relative flex justify-center  w-full h-[120px] mx-auto">
        {/* Hours Picker */}
        <div className="flex items-center justify-center flex-1 p-1">
          <IosPickerItem
            slideCount={12}
            perspective="left"
            loop={loop}
            initialValue={initialHoursIndex}
            onValueChange={handleHoursSelect}
            renderSlide={(index: number) =>
              index === 0 ? "12" : index.toString().padStart(2, "0")
            }
          />
          <div className="text-[1.8rem] text-main flex items-center justify-center px-1">{":"}</div>
          <IosPickerItem
            slideCount={60}
            perspective="right"
            loop={loop}
            initialValue={initialMinutes}
            onValueChange={handleMinutesSelect}
            renderSlide={(index: { toString: () => string }) => index.toString().padStart(2, "0")}
          />
        </div>

        {/* New AM/PM buttons */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          <button
            type="button"
            onClick={() => handlePeriodButtonClick("AM")}
            className={cn(
              "w-[75px] h-[40px] flex items-center justify-center text-xl font-medium transition-colors duration-200",
              initialPeriod === "AM"
                ? "bg-[#129575]/15 text-[#129575] rounded-md"
                : "opacity-80 text-[rgb(150,150,150)]",
            )}
          >
            AM
          </button>
          <button
            type="button"
            onClick={() => handlePeriodButtonClick("PM")}
            className={cn(
              "w-[75px] h-[40px] flex items-center justify-center text-xl font-medium transition-colors duration-200",
              initialPeriod === "PM"
                ? "bg-[#129575]/15 text-[#129575] rounded-md"
                : "opacity-80 text-[rgb(150,150,150)]",
            )}
          >
            PM
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeWheelPicker;
