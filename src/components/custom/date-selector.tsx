"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

// Zod schema for validation
const dateSelectionSchema = z.object({
  selectedDate: z.string().min(1, "Please select a date"),
});

type DateSelectionForm = z.infer<typeof dateSelectionSchema>;

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

const DateSelector = () => {
  const days = getNext7Days();

  const form = useForm<DateSelectionForm>({
    resolver: zodResolver(dateSelectionSchema),
    defaultValues: {
      selectedDate: "",
    },
  });

  const onSubmit = (data: DateSelectionForm) => {
    const selectedDay = days.find((day) => day.id === data.selectedDate);
    console.log("Selected date:", data.selectedDate);
    console.log("Selected day info:", selectedDay);
    alert(`Selected: ${selectedDay?.dayName} ${selectedDay?.dayNumber}, ${selectedDay?.month}`);
  };

  return (
    <div className="w-full mx-auto p-6 space-y-6">
      <Form {...form}>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="selectedDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">Select a Date</FormLabel>
                <FormControl>
                  <div className="flex gap-1 p-1 min-h-28 bg-main rounded-2xl overflow-hidden">
                    {days.map((day) => (
                      <button
                        key={day.id}
                        type="button"
                        onClick={() => field.onChange(day.id)}
                        className={`
                          group flex-1 flex flex-col items-center justify-center py-3 px-2 rounded-full transition-all duration-200 cursor-pointer
                          ${
                            field.value === day.id
                              ? "bg-white text-zinc-800 shadow-md"
                              : "bg-transparent text-gray-700"
                          }
                        `}
                      >
                        <span
                          className={cn("text-xl font-medium font-poppins mb-1", {
                            "text-zinc-300": day.dayName,
                            "text-zinc-400": field.value === day.id,
                          })}
                        >
                          {day.dayName}
                        </span>
                        <span
                          className={cn("text-xl font-medium font-poppins", {
                            "text-zinc-50": day.dayNumber,
                            "text-zinc-800": field.value === day.id,
                          })}
                        >
                          {day.dayNumber}
                        </span>
                      </button>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4">
            <Button
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              className="bg-main hover:bg-green-700"
            >
              Confirm Selection
            </Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Clear
            </Button>
          </div>
        </div>
      </Form>

      {/* Display current selection */}
      {form.watch("selectedDate") && (
        <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-green-800">
            <strong>Selected:</strong>{" "}
            {(() => {
              const selected = days.find((day) => day.id === form.watch("selectedDate"));
              return selected ? `${selected.dayName}, ${selected.month} ${selected.dayNumber}` : "";
            })()}
          </p>
        </div>
      )}
    </div>
  );
};

export default DateSelector;
