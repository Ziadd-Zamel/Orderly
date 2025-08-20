"use client";

import React, { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import OrderTypeCard from "./order-type-card";
import { useTheme } from "next-themes";

export default function OrderTypes() {
  // Translation
  const t = useTranslations();

  // Navigation
  const router = useRouter();

  // States
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const { resolvedTheme } = useTheme();

  // Variables
  const orderTypes = [
    {
      id: "dine-in",
      icon:
        resolvedTheme === "genz" ? "/assets/icons/dine-in-genz.svg" : "/assets/icons/dine-in.svg",
      title: t("orderType.dineIn"),
      description: t("orderType.dineInDescription"),
      isRoute: true,
      theme: "general",
    },
    {
      id: "takeaway",
      icon: "/assets/icons/take-away.svg",
      title: t("orderType.takeaway"),
      description: t("orderType.takeawayDescription"),
      isRoute: false,
      theme: "general",
    },
    {
      id: "delivery",
      icon: "/assets/icons/delivery.svg",
      title: t("orderType.delivery"),
      description: t("orderType.deliveryDescription"),
      isRoute: false,
      theme: "general",
    },
    {
      id: "dine-in-genz",
      icon: "/assets/icons/dine-in-genz.svg",
      title: t("orderType.dineIn"),
      description: t("orderType.dineInDescription"),
      isRoute: true,
      theme: "genz",
    },
    {
      id: "takeaway-genz",
      icon: "/assets/icons/takeaway-genz.svg",
      title: t("orderType.takeaway"),
      description: t("orderType.takeawayDescription"),
      isRoute: false,
      theme: "genz",
    },
    {
      id: "delivery-genz",
      icon: "/assets/icons/delivery-genz.svg",
      title: t("orderType.delivery"),
      description: t("orderType.deliveryDescription"),
      isRoute: false,
      theme: "genz",
    },
  ];

  const filteredOrderTypes = orderTypes.filter((type) => type.theme === resolvedTheme);

  // Functions
  const handleOrderTypeClick = useCallback(
    (typeId: string, isRoute: boolean) => {
      if (isRoute) {
        router.push(`/restaurants/name/dine-in`);
      } else {
        setSelectedType(typeId);
      }
    },
    [router],
  );

  return (
    <div className="mt-24 box-container">
      {/* Heading */}
      <h4 className=" text-xl sm:text-3xl font-medium text-zinc-950 mb-10">
        {t("orderType.heading")}
      </h4>

      {/* Types [Dine In - Takeaway - Delivery] */}
      <div className="flex items-center justify-center lg:justify-between w-full gap-5 flex-wrap">
        {filteredOrderTypes.map((type) => (
          <OrderTypeCard
            key={type.id}
            id={type.id}
            title={type.title}
            description={type.description}
            icon={type.icon}
            selected={selectedType === type.id}
            isRoute={type.isRoute}
            onSelect={handleOrderTypeClick}
          />
        ))}
      </div>
    </div>
  );
}
