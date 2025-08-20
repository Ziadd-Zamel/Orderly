"use client";

import type React from "react";
import { useCallback } from "react";
import type { EmblaOptionsType } from "embla-carousel";
import { IosPickerItem } from "./picker-item";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type TimeFormValues = {
  hours: number;
  minutes: number;
  period: "AM" | "PM";
};

type PropType = {
  loop?: EmblaOptionsType["loop"];
  initialHours?: number;
  initialMinutes?: number;
  initialPeriod?: "AM" | "PM";
  onHoursChange?: (value: number) => void;
  onMinutesChange?: (value: number) => void;
  onPeriodChange?: (value: "AM" | "PM") => void;
  selectedTime: TimeFormValues;
  setSelectedTime: React.Dispatch<React.SetStateAction<TimeFormValues>>;
};

const TimeWheelPicker: React.FC<PropType> = (props) => {
  // Translation
  const t = useTranslations();
  // Props
  const {
    loop,
    initialHours = 8,
    initialMinutes = 5,
    initialPeriod = "PM",
    onHoursChange,
    onMinutesChange,
    onPeriodChange,
    setSelectedTime,
  } = props;

  // Handlers
  const handleHoursSelect = useCallback(
    (index: number) => {
      const hourValue = index === 0 ? 12 : index;
      onHoursChange?.(hourValue);
      setSelectedTime((prev) => ({ ...prev, hours: hourValue }));
    },
    [onHoursChange, setSelectedTime],
  );

  const handleMinutesSelect = useCallback(
    (index: number) => {
      onMinutesChange?.(index);
      setSelectedTime((prev) => ({ ...prev, minutes: index }));
    },
    [onMinutesChange, setSelectedTime],
  );

  const handlePeriodButtonClick = (period: "AM" | "PM") => {
    onPeriodChange?.(period);
    setSelectedTime((prev) => ({ ...prev, period }));
  };

  // For hours, if initialHours is 12, it should map to index 0. Otherwise, it's initialHours.
  const initialHoursIndex = initialHours === 12 ? 0 : initialHours;

  return (
    <div className="w-full flex items-center bg-white rounded-3xl p-6">
      <div className="relative flex justify-between w-full h-[120px] mx-auto">
        {/* Hours Picker */}
        <div className="flex items-center justify-center p-1 w-3/5">
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

        {/* AM/PM buttons */}
        <div className="w-1/3 flex flex-col justify-center items-center gap-2">
          <div
            // type="button"
            onClick={() => handlePeriodButtonClick("AM")}
            className={cn(
              "w-[75px] h-10 flex items-center justify-center text-xl font-medium transition-colors duration-200 cursor-pointer rounded-md",
              initialPeriod === "AM" ? "genz:text-gradient " : "text-[rgb(150,150,150)] opacity-80",
            )}
          >
            {t("am")}
          </div>
          <button
            type="button"
            onClick={() => handlePeriodButtonClick("PM")}
            className={cn(
              "w-[75px] h-10 flex items-center justify-center text-xl font-medium transition-colors duration-200 cursor-pointer rounded-md",
              initialPeriod === "PM"
                ? "text-main genz:text-gradient"
                : "text-[rgb(150,150,150)] opacity-80",
            )}
          >
            {t("pm")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeWheelPicker;
