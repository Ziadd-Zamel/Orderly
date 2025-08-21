"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React, { Suspense } from "react";
import OrdersList from "./orders-list";

type Tab = "all" | "completed" | "pending" | "canceled";

const TABS: Tab[] = ["all", "completed", "pending", "canceled"];

export default function StatusTabs() {
  // Translation
  const t = useTranslations();

  // States
  const [activeTab, setActiveTab] = React.useState<Tab>("all");

  return (
    <>
      <div className="tabs flex items-center gap-2">
        {/* All Tab */}
        {TABS.map((tab) => (
          <Button
            key={tab}
            className={cn("min-w-16 md:min-w-20 border-2 rounded-2xl", {
              "text-main genz:text-purple-500 border-main genz:border-purple-500 bg-second genz:bg-purple-100":
                activeTab === tab,
              "bg-gray-50 genz:bg-gray-50 hover:bg-gray-100 border-zinc-400 text-zinc-400":
                activeTab !== tab,
            })}
            onClick={() => setActiveTab(tab as Tab)}
          >
            {t(tab)}
          </Button>
        ))}
      </div>

      <Suspense
        fallback={
          <div className="border-2 border-main border-l-transparent border-r-transparent size-8 circle"></div>
        }
      >
        <OrdersList activeTab={activeTab} />
      </Suspense>
    </>
  );
}
