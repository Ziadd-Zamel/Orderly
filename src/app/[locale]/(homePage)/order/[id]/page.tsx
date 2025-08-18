"use client";
import React, { JSX, Suspense } from "react";
import { Badge } from "@/components/ui/badge";

import OrderDetails from "../_components/order-details";

export const STATUS_BADGES: Record<Order["status"], JSX.Element> = {
  completed: (
    <Badge
      className="capitalize min-w-24 md:min-w-32 py-1.5 px-3 md:px-5 rounded-xl"
      variant={"completed"}
    >
      <p className="text-sm font-medium">Completed</p>
    </Badge>
  ),
  pending: (
    <Badge
      className="capitalize min-w-24 md:min-w-32 py-1.5 px-3 md:px-5 rounded-xl"
      variant={"pending"}
    >
      <p className="text-sm font-medium">Pending</p>
    </Badge>
  ),
  canceled: (
    <Badge
      className="capitalize min-w-24 md:min-w-32 py-1.5 px-3 md:px-5 rounded-xl"
      variant={"canceled"}
    >
      <p className="text-sm font-medium">Canceled</p>
    </Badge>
  ),
};

export default function OrderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderDetails />
    </Suspense>
  );
}
