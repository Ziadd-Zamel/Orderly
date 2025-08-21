import { Circles } from "@/components/common/decorations";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { FiCheck } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";

export default function PaymentSummary() {
  // Translation
  const t = useTranslations();
  const locale = useLocale();
  const format = useFormatter();

  const paymentList = [
    { id: 1, title: t("subtotal"), price: 415 },
    { id: 2, title: t("service-fee"), price: 15 },
    { id: 3, title: t("tax"), price: 0 },
    { id: 4, title: t("delivery-fee"), price: 30 },
  ];

  const totalAmount = paymentList.reduce((acc, cur) => acc + cur.price, 0);
  return (
    <div className="w-full lg:w-1/3 flex flex-col md:flex-row lg:flex-col space-y-6 md:space-x-6 lg:space-x-0">
      <div className="w-full md:w-3/5 lg:w-full bg-gray-50 rounded-4xl p-8">
        <div className="relative h-full flex flex-col gap-5 bg-white p-5 pb-10 rounded-t-2xl">
          {/* Check Icon on Top */}
          <span className="flex-center size-14 circle bg-white drop-shadow-lg absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <span className="flex-center size-7 circle bg-main genz:bg-gradient">
              <FiCheck size={20} className=" text-white" />
            </span>
          </span>

          {/* Amount Details */}
          <div className="text-center pt-10 pb-5 border-b">
            <h3 className="text-lg md:text-xl font-semibold text-zinc-800 mb-2">
              {t("payment-success")}
            </h3>
            <p className="text-sm font-medium text-zinc-500">{t("payment-success-description")}</p>
          </div>

          {/* Total Payment  */}
          <div className="text-center">
            <h4 className="text-sm font-normal text-zinc-600 mb-1">{t("total-payment")}</h4>
            <p className="text-2xl font-semibold text-zinc-800 genz:text-gradient">
              {format.number(totalAmount, {
                style: "currency",
                currency: "EGP",
                numberingSystem: locale === "ar" ? "arab" : "latn",
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          {/* Payment details */}
          <ul className="flex flex-col gap-3">
            {paymentList.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span className="text-sm text-zinc-400 font-medium">{item.title}</span>
                <span className="text-sm text-zinc-800 font-medium">
                  {format.number(item.price, {
                    numberingSystem: locale === "ar" ? "arab" : "latn",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </li>
            ))}

            <li className="flex justify-between items-center border-t border-dashed border-zinc-300 pt-6">
              <span className="text-sm text-zinc-400 genz:text-purple-500 font-medium">
                {t("total-payment")}
              </span>
              <span className="text-xl text-zinc-800 genz:text-purple-500 font-semibold">
                {format.number(totalAmount, {
                  numberingSystem: locale === "ar" ? "arab" : "latn",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                })}
              </span>
            </li>
          </ul>

          {/* Circles (Decoration) */}
          <Circles className="absolute bottom-0 start-0 translate-y-1/2" circleClassName="" />
        </div>
      </div>

      {/* Payment Method & Delivery Address */}
      <div className="flex-1 space-y-6">
        {/* Payment Method */}
        <div className="w-full bg-gray-50 rounded-4xl p-5 space-y-3">
          <h4 className="text-base text-zinc-800 font-medium">{t("pay-with")}</h4>

          <div className="flex items-center gap-2">
            <Image
              src="/assets/gifs/cash-on-delivery.gif"
              alt="Image 1"
              width={30}
              height={0}
              className="rounded-md shadow"
            />
            <p className="text-base text-main genz:text-purple-500 font-medium">
              {t("cash-on-delivery")}
            </p>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="w-full bg-gray-50 rounded-4xl p-5 space-y-3">
          <h4 className="text-base text-zinc-800 font-medium">{t("delivery-address")}</h4>

          <div className="flex items-center gap-2 text-main genz:text-purple-500">
            <TiLocation size={22} />
            <p className="text-base text-main genz:text-purple-500 font-medium underline">
              {t("shipping-in")} {"17110"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
