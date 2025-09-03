import { CalendarDays, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import OrderCard from "@/components/common/order-card";
import OrderSummary from "./order-summary";
import MyCart from "./my-cart";
import { useTranslations } from "next-intl";

export default function CartPage() {
  const t = useTranslations();
  return (
    <main className="relative z-20 box-container grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-32 mb-20">
      {/* Left Column: Restaurant Info and Orders */}
      <section className="md:col-span-2 grid gap-6">
        {/* Restaurant Info */}
        <header className="bg-gray-50 px-4  rounded-xl flex items-center justify-between flex-col sm:flex-row">
          <div className="flex items-center gap-4 self-start sm:self-center">
            <div className="bg-teal-50 genz:bg-purple-100 p-3 rounded-full">
              <ShoppingCart className="h-6 w-6 text-main genz:text-purple-500" aria-hidden />
            </div>
            <div>
              <h2 className="text-lg font-medium">Vinny&apos;s</h2>
              <p className="text-sm text-gray-500">
                {t("order-type")}{" "}
                <span className="text-main genz:text-purple-500 font-medium">Delivery</span>
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            className="rounded-full px-4 py-2 text-sm text-zinc-900 flex items-center gap-2 self-end sm:self-center"
            aria-label="Change order date"
          >
            <CalendarDays className="h-4 w-4 text-black genz:text-purple-400" aria-hidden />
            Wed 123
            <ChevronRight className="h-4 w-4" aria-hidden />
          </Button>
        </header>

        {/* Order List */}
        <Card className="p-2 rounded-xl bg-gray-50 ">
          <CardContent className="pt-0">
            <ul className="space-y-4 overflow-y-auto max-h-[400px] no-scrollbar mt-2">
              {Array.from({ length: 5 }, (_, i) => (
                <li key={i}>
                  <OrderCard className="bg-white" />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Right Column: Order Summary and My Cart */}
      <aside className="md:col-span-1 grid gap-6">
        <OrderSummary
          splitBills
          items={[
            { label: t("Your-Order"), price: 100 },
            { label: t("group-order"), price: 50 },
            { label: t("service -fee"), price: 20 },
            { label: t("taxes"), price: 10 },
          ]}
          total={180}
        />
        <MyCart />
      </aside>
    </main>
  );
}
