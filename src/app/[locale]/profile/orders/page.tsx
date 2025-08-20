"use client";
import { useTranslations } from "next-intl";
import React from "react";
import StatusTabs from "./_components/status-tabs";

export default function Page() {
  // Translation
  const t = useTranslations();

  return (
    <>
      <div className="flex flex-col gap-6">
        <h2 className="text-zinc-800 text-2xl font-medium">{t("my-orders")}</h2>
        <StatusTabs />
      </div>
    </>
  );
}
