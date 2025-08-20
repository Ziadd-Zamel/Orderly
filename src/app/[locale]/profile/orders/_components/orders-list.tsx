import React from "react";
import OrderRow from "./order-row";
import { Link } from "@/i18n/routing";

const orders: Order[] = [
  {
    id: 1,
    status: "completed",
    date: "Apr 5, 2025, 10:07 AM",
    totalPrice: 540,
    currency: "EGP",
    paymentMethod: "Paid with cash",
    itemsCount: 11,
    productImages: [
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
    ],
  },
  {
    id: 2,
    status: "pending",
    date: "Apr 2, 2025, 4:30 PM",
    totalPrice: 320,
    currency: "EGP",
    paymentMethod: "Paid online",
    itemsCount: 6,
    productImages: [
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
    ],
  },
  {
    id: 3,
    status: "canceled",
    date: "Mar 29, 2025, 8:15 PM",
    totalPrice: 780,
    currency: "EGP",
    paymentMethod: "Paid with cash",
    itemsCount: 4,
    productImages: [
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
      "/assets/Images/test-product.svg",
    ],
  },
];

export default function OrdersList({
  activeTab,
}: {
  activeTab: "all" | "completed" | "pending" | "canceled";
}) {
  const filtered = {
    all: orders,
    completed: orders.filter((o) => o.status === "completed"),
    pending: orders.filter((o) => o.status === "pending"),
    canceled: orders.filter((o) => o.status === "canceled"),
  };

  return (
    <div className="flex flex-col gap-6">
      {filtered[activeTab].map((order) => (
        <Link href={`/order/${order.id}`} key={order.id}>
          <OrderRow order={order} />
        </Link>
      ))}
    </div>
  );
}
