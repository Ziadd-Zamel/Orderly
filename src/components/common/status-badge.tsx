import React, { JSX } from "react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

const TranslatedStatus = ({ status }: { status: "completed" | "pending" | "canceled" }) => {
  const t = useTranslations();
  return <p className="text-sm font-medium">{t(status)}</p>;
};

const STATUS_BADGES: Record<Order["status"], JSX.Element> = {
  completed: (
    <Badge
      className="capitalize min-w-24 md:min-w-32 py-1.5 px-3 md:px-5 rounded-xl genz:text-purple-500 genz:border-purple-500 genz:bg-purple-50"
      variant={"completed"}
    >
      <TranslatedStatus status="completed" />
    </Badge>
  ),
  pending: (
    <Badge
      className="capitalize min-w-24 md:min-w-32 py-1.5 px-3 md:px-5 rounded-xl genz:text-purple-500 genz:border-purple-500 genz:bg-purple-50"
      variant={"pending"}
    >
      <TranslatedStatus status="pending" />
    </Badge>
  ),
  canceled: (
    <Badge
      className="capitalize min-w-24 md:min-w-32 py-1.5 px-3 md:px-5 rounded-xl genz:text-purple-500 genz:border-purple-500 genz:bg-purple-50"
      variant={"canceled"}
    >
      <TranslatedStatus status="canceled" />
    </Badge>
  ),
};

export default function StatusBadge({ status }: { status: "completed" | "pending" | "canceled" }) {
  return <>{STATUS_BADGES[status]}</>;
}
