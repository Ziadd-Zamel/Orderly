import { CalendarDays, ChevronRight, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import OrderCard from "@/components/common/order-card";
import OrderSummary from "./order-summary";
import MyCart from "./my-cart";

export default function CartPage() {
  return (
    <div className=" box-container grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-6">
      {/* Left Column: Restaurant Info and Order Cards */}
      <section className="md:col-span-2 grid gap-6">
        <div className="bg-custom-gray px-4 py-3 rounded-xl shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-teal-50 p-3 rounded-full">
              <ShoppingCart className="h-6 w-6 text-main" />
            </div>
            <div>
              <h2 className="text-lg font-medium">Vinny&apos;s</h2>
              <p className="text-sm text-gray-500">
                Order Type: <span className="text-main">Delivery</span>
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className="rounded-full px-4 py-2 text-sm text-zinc-900 flex-center gap-2"
          >
            <CalendarDays className="h-4 w-4" />
            Wed 123
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <Card className="p-2 rounded-xl shadow-sm bg-custom-gray">
          <CardContent className="pt-0">
            <div className="space-y-4 overflow-y-auto max-h-[400px] no-scrollbar">
              <OrderCard />
              <OrderCard />
              <OrderCard />
              <OrderCard />
              <OrderCard />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Right Column: Order Summary and My Cart */}
      <aside className="md:col-span-1 grid gap-6">
        <OrderSummary
          items={[
            { label: "Your Order", price: 100 },
            { label: "Group Order", price: 50 },
            { label: "Service Fee", price: 20 },
            { label: "Taxes", price: 10 },
          ]}
          total={180}
          companyName={"Bazooka"}
          onlyTotal
        />
        <MyCart />
      </aside>
    </div>
  );
}
