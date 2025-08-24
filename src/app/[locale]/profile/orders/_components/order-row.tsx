import CollapsedOrdersList from "@/components/common/collapsed-orders";
import StatusBadge from "@/components/common/status-badge";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbReceipt } from "react-icons/tb";

export default function OrderRow({ order }: { order: Order }) {
  // Translation
  const t = useTranslations();
  const locale = useLocale();
  const format = useFormatter();

  // Variables
  const statusText = {
    completed: t("order-delivered"),
    pending: t("order-pending"),
    canceled: t("order-canceled"),
  };

  return (
    <div className="relative z-20 bg-white border border-zinc-300 rounded-4xl p-5 sm:p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6 mb-6 lg:mb-10">
        {/* Status text & Date - Time */}
        <div className="w-full lg:w-1/4 flex justify-between items-start lg:block">
          <div>
            <h3 className="text-base md:text-lg font-medium text-zinc-800 mb-1">
              {statusText[order.status]}
            </h3>
            <p className="text-sm font-normal text-zinc-500">{order.date}</p>
          </div>
          <div className="lg:hidden">{<StatusBadge status={order.status} />}</div>
        </div>

        {/* Price & Payment Method + Items (Mobile Grid) / Separate columns (Desktop) */}
        <div className="w-full lg:w-2/4 grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Price & Payment Method */}
          <div className="flex items-center gap-2 lg:justify-center">
            <span className="flex-center size-10 md:size-12 circle bg-gray-50 genz:bg-purple-100 shrink-0">
              <RiMoneyDollarCircleLine
                size={16}
                className="md:w-[18px] md:h-[18px] genz:text-purple-500"
              />
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
            <span className="flex-center size-10 md:size-12 circle bg-gray-50 genz:bg-purple-100  shrink-0">
              <TbReceipt size={16} className="md:w-[18px] md:h-[18px]  genz:text-purple-500" />
            </span>
            <div className="min-w-0 flex-1 lg:flex-initial">
              <h3 className="text-sm md:text-lg font-medium text-zinc-800">{t("items")}</h3>
              <p className="text-xs md:text-sm font-normal text-zinc-500">{order.totalPrice}x</p>
            </div>
          </div>
        </div>

        {/* Status Badge - Desktop Only */}
        <div className="hidden lg:block lg:w-1/4 lg:text-end">
          {<StatusBadge status={order.status} />}
        </div>
      </div>

      <CollapsedOrdersList productsImages={order.productImages} />
    </div>
  );
}
