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
      <HeadLine title={t("choose-floor")} className="mb-10">
        <Floors selectedFloor={selectedFloor} setSelectedFloor={setSelectedFloor} />
      </HeadLine>

      <div className="box-container px-4">
        <div className="flex flex-col-reverse gap-10 lg:flex-row xl:gap-28">
          <div className="flex min-h-44 w-full items-center justify-center lg:w-1/2">
            <Table
              chairsCount={chairsCount}
              setChairsCount={setChairsCount}
              min={2}
              max={6}
              step={1}
            />
          </div>

          <div className="flex w-full flex-col items-center gap-16 lg:w-1/2">
            <div className="flex min-h-44 w-full flex-col items-center gap-6 rounded-4xl bg-gray-100 p-8">
              <h3 className="text-xl font-semibold text-zinc-800">{t("date-time")}</h3>
              <DateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
              <TimePickerForm selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
            </div>

            <Button onClick={handleReservation} className="genz:block hidden w-full text-lg">
              {t("reserve")}
            </Button>
          </div>
        </div>

        <div className="genz:justify-end genz:hidden mt-12 flex justify-center">
          <Button onClick={handleReservation} className="w-full text-lg sm:max-w-sm">
            {t("reserve")}
          </Button>
        </div>
      </div>
    </section>
  );
}
