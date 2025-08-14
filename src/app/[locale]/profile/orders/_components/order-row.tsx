import CollapsedOrdersList from "@/components/common/collapsed-orders";
import { Badge } from "@/components/ui/badge";
import { useFormatter, useLocale } from "next-intl";
import React, { JSX } from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbReceipt } from "react-icons/tb";

export const STATUS_BADGES: Record<Order["status"], JSX.Element> = {
  completed: (
    <Badge className="capitalize min-w-32 py-1.5 px-5 rounded-xl" variant={"completed"}>
      <p className="text-sm font-medium">Completed</p>
    </Badge>
  ),
  pending: (
    <Badge className="capitalize min-w-32 py-1.5 px-5 rounded-xl" variant={"pending"}>
      <p className="text-sm font-medium">Pending</p>
    </Badge>
  ),
  canceled: (
    <Badge className="capitalize min-w-32 py-1.5 px-5 rounded-xl" variant={"canceled"}>
      <p className="text-sm font-medium">Canceled</p>
    </Badge>
  ),
};

export default function OrderRow({ order }: { order: Order }) {
  // Translation
  const locale = useLocale();
  const format = useFormatter();

  // Variables
  const statusText = {
    completed: "Order Delivered",
    pending: "Order Pending",
    canceled: "Order Canceled",
  };

  // Functions
  const renderStatusBadge = (status: Order["status"]) => {
    return STATUS_BADGES[status];
  };

  return (
    <div className="border border-zinc-300 rounded-4xl p-5 sm:p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6 mb-6 lg:mb-10">
        {/* Status text & Date - Time */}
        <div className="w-full lg:w-1/4 flex justify-between items-start lg:block">
          <div>
            <h3 className="text-base md:text-lg font-medium text-zinc-800 mb-1">
              {statusText[order.status]}
            </h3>
            <p className="text-sm font-normal text-zinc-500">{order.date}</p>
          </div>
          <div className="lg:hidden">{renderStatusBadge(order.status)}</div>
        </div>

        {/* Price & Payment Method + Items (Mobile Grid) / Separate columns (Desktop) */}
        <div className="w-full lg:w-2/4 grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Price & Payment Method */}
          <div className="flex items-center gap-2 lg:justify-center">
            <span className="flex-center size-10 md:size-12 circle bg-gray-50 shrink-0">
              <RiMoneyDollarCircleLine size={16} className="md:w-[18px] md:h-[18px]" />
            </span>
            <div className="min-w-0 flex-1 lg:flex-initial">
              <h3 className="text-sm md:text-lg font-medium text-zinc-800 truncate lg:truncate-none">
                {format.number(order.totalPrice, {
                  style: "currency",
                  currency: "EGP",
                  numberingSystem: locale === "ar" ? "arab" : "latn",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                })}
              </h3>
              <p className="text-xs md:text-sm font-normal text-zinc-500 truncate lg:truncate-none">
                {order.paymentMethod}
              </p>
            </div>
          </div>

          {/* Items */}
          <div className="flex items-center gap-2 lg:justify-center">
            <span className="flex-center size-10 md:size-12 circle bg-gray-50 shrink-0">
              <TbReceipt size={16} className="md:w-[18px] md:h-[18px]" />
            </span>
            <div className="min-w-0 flex-1 lg:flex-initial">
              <h3 className="text-sm md:text-lg font-medium text-zinc-800">Items</h3>
              <p className="text-xs md:text-sm font-normal text-zinc-500">{order.totalPrice}x</p>
            </div>
          </div>
        </div>

        {/* Status Badge - Desktop Only */}
        <div className="hidden lg:block lg:w-1/4 lg:text-end">
          {renderStatusBadge(order.status)}
        </div>
      </div>

      <CollapsedOrdersList productsImages={order.productImages} />
    </div>
  );
}
