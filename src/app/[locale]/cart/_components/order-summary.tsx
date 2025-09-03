/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { CiCreditCard1 } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useRouter } from "@/i18n/navigation";

import CheckoutButton from "./checkout-button";
import OrderButtons from "./order-buttons";
import { useTranslations } from "next-intl";

interface Item {
  label: string | any;
  price: number;
}

interface OrderSummaryProps {
  items: Item[];
  total: number;
  splitBills?: boolean;
  companyName?: string;
  onlyTotal?: boolean;
  checkout?: boolean;
  sendOrder?: boolean;
}

export default function OrderSummary({
  items,
  total,
  splitBills,
  companyName,
  onlyTotal,
  checkout,
  sendOrder,
}: OrderSummaryProps) {
  const router = useRouter();
  const t = useTranslations();

  return (
    <Card className="rounded-xl border-none bg-gray-50 shadow-none">
      <CardHeader>
        <CardTitle className="genz:text-gradient text-xl font-semibold">
          {t("order-summary")}
        </CardTitle>
      </CardHeader>

      <CardContent className="grid gap-4">
        {/* Split bills toggle */}
        {splitBills && (
          <div className="flex items-center justify-between">
            <Label htmlFor="split-bills" className="text-sm font-normal">
              {t("split-bill")}
            </Label>
            <Switch id="split-bills" className="h-4" />
          </div>
        )}

        {/* Company info */}
        {companyName && (
          <Card className="bg-white p-0">
            <CardContent className="flex items-center justify-between px-3 py-2 text-sm">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src="/assets/Images/banner.png"
                    alt={`${companyName} Logo`}
                    className="size-7"
                  />
                </Avatar>
                <p className="text-sm font-semibold">{companyName}</p>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/assets/icons/table.svg" alt="Table icon" width={20} height={20} />
                <span>20</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Bill details */}
        <div className="bg-custom-orange/20 genz:bg-purple-50 relative space-y-2 px-8 py-3 text-sm">
          {/* Decorative waves */}
          <Image
            src={"/assets/Images/wave.svg"}
            alt="wave"
            width={30}
            height={0}
            className="absolute top-1/2 -left-3.5 h-[90%] -translate-y-1/2"
          />
          <Image
            src={"/assets/Images/wave.svg"}
            alt="wave"
            width={30}
            height={0}
            className="absolute top-1/2 -right-3.5 h-[90%] -translate-y-1/2"
          />
          {/* Items list */}
          {!onlyTotal &&
            items.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span className="font-medium md:text-xs lg:text-base">{item.label}:</span>
                <span className="md:text-xs lg:text-base">{item.price} EGP</span>
              </div>
            ))}

          {/* Total */}
          {onlyTotal && <p className="mb-2 text-sm font-semibold">{t("your-bill")}</p>}
          <div className="genz:border-none flex justify-between border-t border-dashed border-[#FF9C00AB] pt-2 text-lg font-semibold">
            <span className="text-main genz:text-gradient md:text-sm lg:text-base">
              {t("total")}
            </span>
            <span className="text-main genz:text-gradient md:text-sm lg:text-base">
              {total} EGP
            </span>
          </div>
        </div>

        {/* Actions */}
        {sendOrder && !checkout && <OrderButtons />}

        {!checkout && !sendOrder && (
          <Button
            variant="default"
            className="mt-5 flex items-center justify-between py-3.5 font-normal"
            onClick={() => router.push("/cart/checkout")}
          >
            <span className="flex items-center rtl:flex-row-reverse">
              <CiCreditCard1 className="mr-2 h-5 w-5 text-white" />
              {t("checkout")}
            </span>
            {total} EGP
          </Button>
        )}

        {checkout && !sendOrder && <CheckoutButton />}
      </CardContent>
    </Card>
  );
}
