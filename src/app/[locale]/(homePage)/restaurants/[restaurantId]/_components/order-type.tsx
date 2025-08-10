"use client";

import { useState } from "react";
import OrderCard from "./order-card";

export default function OrderType() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="mt-24 box-container">
      <h4 className=" text-xl sm:text-3xl font-medium text-zinc-950 mb-10">Choose Order Type</h4>

      <div className="flex items-center justify-center lg:justify-between w-full gap-5 flex-wrap">
        <OrderCard
          title="Dine In"
          description="Book your table now"
          icon="/assets/icons/dine-in.svg"
          selected={selectedType === "Dine In"}
          onClick={() => setSelectedType("Dine In")}
        />
        <OrderCard
          title="Takeaway"
          description="Grab your food to go."
          icon="/assets/icons/take-away.svg"
          selected={selectedType === "Takeaway"}
          onClick={() => setSelectedType("Takeaway")}
        />
        <OrderCard
          title="Delivery"
          description="Enjoy fast delivery."
          icon="/assets/icons/delivery.svg"
          selected={selectedType === "Delivery"}
          onClick={() => setSelectedType("Delivery")}
        />
      </div>
    </div>
  );
}
