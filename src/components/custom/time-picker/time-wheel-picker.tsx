"use client";

import TimeWheelPicker from "./time-carousel";
import { useCallback } from "react";

type TimeFormValues = {
  hours: number;
  minutes: number;
  period: "AM" | "PM";
};

type TimePickerFormProps = {
  selectedTime: TimeFormValues;
  setSelectedTime: React.Dispatch<React.SetStateAction<TimeFormValues>>;
};

export default function TimePickerForm({ selectedTime, setSelectedTime }: TimePickerFormProps) {
  // Watch for changes from the EmblaCarousel and update form values
  const handleHoursChange = useCallback(
    (value: number) => {
      setSelectedTime((prev) => ({ ...prev, hours: value }));
    },
    [setSelectedTime],
  );

  const handleMinutesChange = useCallback(
    (value: number) => {
      setSelectedTime((prev) => ({ ...prev, minutes: value }));
    },
    [setSelectedTime],
  );

  const handlePeriodChange = useCallback(
    (value: "AM" | "PM") => {
      setSelectedTime((prev) => ({ ...prev, period: value }));
    },
    [setSelectedTime],
  );

  return (
    <TimeWheelPicker
      loop={true}
      initialHours={selectedTime.hours}
      initialMinutes={selectedTime.minutes}
      initialPeriod={selectedTime.period}
      onHoursChange={handleHoursChange}
      onMinutesChange={handleMinutesChange}
      onPeriodChange={handlePeriodChange}
      selectedTime={selectedTime}
      setSelectedTime={setSelectedTime}
    />
  );
}
