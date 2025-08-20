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

interface Item {
  label: string;
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

  return (
    <Card className="rounded-xl border-none shadow-none bg-gray-50">
      <CardHeader>
        <CardTitle className="text-xl font-semibold genz:text-gradient">Order Summary</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-4">
        {/* Split bills toggle */}
        {splitBills && (
          <div className="flex items-center justify-between">
            <Label htmlFor="split-bills" className="text-sm font-normal">
              Do you want to split the bills?
            </Label>
            <Switch id="split-bills" className="h-4" />
          </div>
        )}

        {/* Company info */}
        {companyName && (
          <Card className="bg-white p-0">
            <CardContent className="text-sm flex justify-between items-center px-3 py-2">
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
        <div className="space-y-2 px-8 py-3 text-sm bg-custom-orange/20 genz:bg-purple-50 relative">
          {/* Decorative waves */}
          <Image
            src={"/assets/Images/wave.svg"}
            alt="wave"
            width={30}
            height={0}
            className="h-[90%] absolute -left-3.5 top-1/2 -translate-y-1/2"
          />
          <Image
            src={"/assets/Images/wave.svg"}
            alt="wave"
            width={30}
            height={0}
            className="h-[90%] absolute -right-3.5 top-1/2 -translate-y-1/2"
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
          {onlyTotal && <p className="text-sm font-semibold mb-2">Your Bill</p>}
          <div className="flex justify-between pt-2 border-t border-dashed border-[#FF9C00AB] genz:border-none font-semibold text-lg">
            <span className="text-main md:text-sm lg:text-base genz:text-gradient">Total</span>
            <span className="text-main md:text-sm lg:text-base genz:text-gradient">
              {total} EGP
            </span>
          </div>
        </div>

        {/* Actions */}
        {sendOrder && !checkout && <OrderButtons />}

        {!checkout && !sendOrder && (
          <Button
            variant="default"
            className="flex justify-between items-center py-3.5 font-normal mt-5"
            onClick={() => router.push("/cart/checkout")}
          >
            <span className="flex items-center">
              <CiCreditCard1 className="h-5 w-5 mr-2 text-white" />
              Checkout
            </span>
            {total} EGP
          </Button>
        )}

        {checkout && !sendOrder && <CheckoutButton />}
      </CardContent>
    </Card>
  );
}
