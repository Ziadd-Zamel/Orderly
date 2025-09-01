import OrderCard from "@/components/common/order-card";
import Image from "next/image";
import React from "react";
import { RiStarFill } from "react-icons/ri";

export default function ItemsContainer() {
  // Variables
  const orderRate = 4;
  return (
    <div className="w-full h-[70vh] bg-gray-50 rounded-4xl p-5 pb-26 md:px-6 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        {/* Container Headline */}
        <h3 className="text-xl font-semibold text-zinc-800">Order Items</h3>

        <div className="flex items-center gap-2">
          {/* Place Image */}
          <Image
            src="/assets/Images/bazooka.png"
            alt="Product Image"
            width={50}
            height={0}
            className="circle"
          />

          {/* Place name & Rate */}
          <div className="space-y-1">
            <h5 className="text-base font-semibold text-zinc-800">Bazooka</h5>
            <ul className="flex gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <li key={i}>
                  {i < orderRate ? (
                    <RiStarFill size={14} className="text-yellow-400" />
                  ) : (
                    <RiStarFill size={14} className="text-gray-300" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="h-full overflow-y-auto space-y-6 sm:space-y-10 hide-scrollbar">
        {Array.from({ length: 5 }, (_, i) => (
          <OrderCard className="border-none genz:border-gradient" key={i} />
        ))}
      </div>
    </div>
  );
}
