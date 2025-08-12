"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { CiCreditCard1 } from "react-icons/ci";

import CheckoutButton from "./checkout-button";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
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
    <Card className="rounded-xl shadow-sm bg-custom-gray">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {/* Show split bills toggle if `splitBills` is true */}
        {splitBills && (
          <div className="flex items-center justify-between">
            <Label htmlFor="split-bills" className="text-xs font-normal">
              Do you want to split the bills?
            </Label>
            <Switch className=" h-4" />
          </div>
        )}

        {/* Show company info if `companyName` is provided */}
        {companyName && (
          <Card className=" bg-white p-0">
            <CardContent className="text-sm flex justify-between items-center px-3 py-2">
              <div className="flex-center gap-2">
                <Avatar>
                  <AvatarImage
                    src="/assets/Images/banner.png"
                    alt="Company Logo"
                    className="size-7"
                  />
                </Avatar>
                <p className="text-sm font-semibold">{companyName}</p>
              </div>
              <div className="flex-center gap-1">
                <Image src={"/assets/icons/table.svg"} alt="table icon" width={20} height={0} />
                <span>20</span>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-2 px-4 py-3 text-sm bg-custom-orange/20">
          {/* Render itemized bill only if `onlyTotal` is not true */}
          {!onlyTotal && (
            <>
              {items.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.label}:</span>
                  <span>{item.price} EGP</span>
                </div>
              ))}
            </>
          )}

          {/* Always show total */}
          <p className="text-sm font-semibold mb-2">Your Bill</p>
          <div className="flex justify-between pt-2 border-t border-dashed border-[#FF9C00AB] font-semibold text-lg">
            <span className="text-main">Total</span>
            <span className="text-main">{total} EGP</span>
          </div>
        </div>

        {/* Show order buttons only if `sendOrder` is true and `checkout` is false */}
        {sendOrder && !checkout && <OrderButtons />}

        {/* Show "Checkout" button if neither `checkout` nor `sendOrder` are true */}
        {!checkout && !sendOrder && (
          <Button
            variant={"default"}
            className="flex-center justify-between py-3.5 font-normal mt-5"
            onClick={() => router.push("/cart/checkout")}
          >
            <span className="flex-center">
              <CiCreditCard1 className="h-5 w-5 mr-2 text-white" />
              Checkout
            </span>
            {total} EGP
          </Button>
        )}

        {/* Show checkout payment button only if `checkout` is true and `sendOrder` is false */}
        {checkout && !sendOrder && <CheckoutButton />}
      </CardContent>
    </Card>
  );
}
