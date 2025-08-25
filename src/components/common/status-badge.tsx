import React, { JSX } from "react";
import { Badge } from "@/components/ui/badge";

const STATUS_BADGES: Record<Order["status"], JSX.Element> = {
  completed: (
    <Badge
      className="capitalize min-w-24 md:min-w-32 py-1.5 px-3 md:px-5 rounded-xl genz:text-purple-500 genz:border-purple-500 genz:bg-purple-50"
      variant={"completed"}
    >
      <p className="text-sm font-medium">Completed</p>
    </Badge>
  ),
  pending: (
    <Badge
      className="capitalize min-w-24 md:min-w-32 py-1.5 px-3 md:px-5 rounded-xl genz:text-purple-500 genz:border-purple-500 genz:bg-purple-50"
      variant={"pending"}
    >
      <p className="text-sm font-medium">Pending</p>
    </Badge>
  ),
  canceled: (
    <Badge
      className="capitalize min-w-24 md:min-w-32 py-1.5 px-3 md:px-5 rounded-xl genz:text-purple-500 genz:border-purple-500 genz:bg-purple-50"
      variant={"canceled"}
    >
      <p className="text-sm font-medium">Canceled</p>
    </Badge>
  ),
};

export default function StatusBadge({ status }: { status: "completed" | "pending" | "canceled" }) {
  return <>{STATUS_BADGES[status]}</>;
}
