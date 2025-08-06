"use client";
import { useForm } from "react-hook-form";
import TimeWheelPicker from "./time-carousel";
import { Button } from "@/components/ui/button"; // Assuming shadcn button is available
import { useCallback } from "react";

type TimeFormValues = {
  hours: number;
  minutes: number;
  period: "AM" | "PM";
};

export default function TimePickerForm() {
  const { handleSubmit, setValue, watch } = useForm<TimeFormValues>({
    defaultValues: {
      hours: 8, // Default to 8 hours
      minutes: 5, // Default to 5 minutes
      period: "PM", // Default to PM
    },
  });

  const onSubmit = (data: TimeFormValues) => {
    console.log("Selected Time:", data);
    alert(
      `Selected Time: ${data.hours}:${data.minutes.toString().padStart(2, "0")} ${data.period}`,
    );
  };

  // Watch for changes from the EmblaCarousel and update form values
  const handleHoursChange = useCallback(
    (value: number) => {
      setValue("hours", value);
    },
    [setValue],
  );

  const handleMinutesChange = useCallback(
    (value: number) => {
      setValue("minutes", value);
    },
    [setValue],
  );

  const handlePeriodChange = useCallback(
    (value: "AM" | "PM") => {
      setValue("period", value);
    },
    [setValue],
  );

  // Initial values for EmblaCarousel
  const initialHours = watch("hours");
  const initialMinutes = watch("minutes");
  const initialPeriod = watch("period");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-4">
      <TimeWheelPicker
        loop={true}
        initialHours={initialHours}
        initialMinutes={initialMinutes}
        initialPeriod={initialPeriod}
        onHoursChange={handleHoursChange}
        onMinutesChange={handleMinutesChange}
        onPeriodChange={handlePeriodChange}
      />
      <Button type="submit" className="mt-4">
        Submit Time
      </Button>
    </form>
  );
}
