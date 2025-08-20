"use client";

import { useState } from "react";
import HeadLine from "@/components/common/head-line";
import Floors from "../_components/floors";
import Table from "../_components/table";
import DateSelector from "@/components/custom/date-selector";
import TimePickerForm from "@/components/custom/time-picker/time-wheel-picker";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

type TimeFormValues = {
  hours: number;
  minutes: number;
  period: "AM" | "PM";
};

export default function DineInClient() {
  // Translation
  const t = useTranslations();

  // States for all form data
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [chairsCount, setChairsCount] = useState<number>(4);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState<TimeFormValues>({
    hours: 12,
    minutes: 0o0,
    period: "AM",
  });

  const handleReservation = async () => {
    if (!selectedDate) {
      alert("Please select a date");
      return;
    }

    const reservationData = {
      floor: selectedFloor,
      chairs: chairsCount,
      date: selectedDate,
      time: {
        hours: selectedTime.hours,
        minutes: selectedTime.minutes,
        period: selectedTime.period,
        formatted: `${selectedTime.hours}:${selectedTime.minutes.toString().padStart(2, "0")} ${
          selectedTime.period
        }`,
      },
    };

    console.log("Reservation data:", reservationData);
  };

  return (
    <section className="mt-32 mb-10">
      <div className="mb-6">
        <HeadLine title="Choose Floor">
          <Floors selectedFloor={selectedFloor} setSelectedFloor={setSelectedFloor} />
        </HeadLine>
      </div>

      <div className="box-container px-4">
        <div className="flex flex-col-reverse lg:flex-row gap-10 xl:gap-28">
          <div className="w-full lg:w-1/2 min-h-44 flex items-center justify-center">
            <Table
              chairsCount={chairsCount}
              setChairsCount={setChairsCount}
              min={1}
              max={6}
              step={1}
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center gap-6 bg-gray-100 rounded-4xl min-h-44 p-8">
            <h3 className="text-zinc-800 text-xl font-semibold">{t("date-time")}</h3>
            <DateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <TimePickerForm selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button onClick={handleReservation} className="w-full sm:max-w-sm text-lg">
            Reserve
          </Button>
        </div>
      </div>
    </section>
  );
}
