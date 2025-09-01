import StatusBadge from "@/components/common/status-badge";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

export default function TrackingStatus() {
  return (
    <div className="w-full bg-gray-50 rounded-4xl p-5 md:p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6 mb-6 lg:mb-10">
        {/* Status text & Date - Time */}
        <div className="w-full flex justify-between items-start">
          <div>
            <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-zinc-800 mb-2">
              Order Has Completed
            </h3>
            <p className="text-sm font-medium text-zinc-500">
              Order Arrived at Apr 5, 2022, 10:07 AM
            </p>
          </div>

          <div className="hidden sm:block w-1/4 text-end">
            <StatusBadge status="completed" />
          </div>
        </div>
      </div>

      {/* Gif and Text */}
      <div className="flex-center flex-col gap-5 mb-10">
        <Image
          src="/assets/gifs/order-delivered-box.gif"
          alt="Order Image"
          width={80}
          height={0}
          loading="lazy"
          className="circle"
        />

        <h3 className="text-lg md:text-xl font-semibold text-zinc-800">Order is Delivered</h3>
      </div>

      {/* Tracking Status */}
      <div className="hidden sm:block space-y-2">
        {/* Progress Bar */}
        <div className="flex gap-4 md:gap-8 items-center">
          <div className="w-1/3 h-2.5 rounded-full bg-main genz:bg-gradient"></div>
          <div className="w-1/3 h-2.5 rounded-full bg-main genz:bg-gradient"></div>
          <div className="w-1/3 h-2.5 rounded-full bg-gray-200"></div>
        </div>

        {/* Status Date - Time */}
        <div className="flex gap-4 md:gap-8 items-center">
          {/* In progress date - time */}
          <div className="w-1/3 flex-center gap-2">
            <span className="flex-center size-5  circle bg-main genz:bg-gradient">
              <FaCheck size={16} className="size-3 text-white" />
            </span>
            <span className="text-sm md:text-base font-normal text-zinc-500">
              Apr 5, 2022, 10:07 AM
            </span>
          </div>

          {/* Order preparation date - time */}
          <div className="w-1/3 flex-center gap-2">
            <span className="flex-center size-5 circle bg-main genz:bg-gradient">
              <FaCheck size={16} className="size-3 text-white" />
            </span>
            <span className="text-sm md:text-base font-normal text-zinc-500">
              Apr 5, 2022, 10:07 AM
            </span>
          </div>

          {/* Order delivery date - time */}
          <div className="w-1/3 flex-center gap-2">
            <span className="flex-center size-5 border border-zinc-300 circle bg-gray-100">
              {/* <FaCheck size={16} className="size-3 text-white" /> */}
            </span>
            <span className="text-sm md:text-base font-normal text-zinc-300">
              Apr 5, 2022, 10:07 AM
            </span>
          </div>
        </div>
      </div>

      {/* Status Badge - Desktop Only */}
      <div className="sm:hidden text-center">
        <StatusBadge status="completed" />
      </div>
    </div>
  );
}
