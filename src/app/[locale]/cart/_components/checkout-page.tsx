import { Card, CardContent } from "@/components/ui/card";
import OrderCard from "@/components/common/order-card";
import OrderSummary from "./order-summary";
import { CiCreditCard1 } from "react-icons/ci";
import CustomAccordion from "@/components/common/custom-accorion";
import { CiLocationOn } from "react-icons/ci";
import DateSelector from "@/components/custom/date-selector";
import TimePickerForm from "@/components/custom/time-picker/time-wheel-picker";

export default function CheckoutPage() {
  return (
    <div className=" box-container grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-32 mb-20">
      {/* Left Column: Checkout */}
      <div className="md:col-span-2 grid gap-6">
        <Card className="py-3 px-4 rounded-xl shadow-sm bg-custom-gray">
          <div className="flex items-center gap-4">
            <div className="bg-teal-50 p-3 rounded-full">
              <CiCreditCard1 className="h-6 w-6 text-main" />
            </div>
            <div>
              <h2 className="text-lg font-medium">Vinny&apos;s</h2>
              <p className="text-sm text-gray-500">
                Order Type: <span className="text-main">Delivery</span>
              </p>
            </div>
          </div>
          <CardContent className="p-0">
            <div className="space-y-4 overflow-y-auto max-h-[400px] no-scrollbar">
              <CustomAccordion
                title="Select Date & Time"
                accordionContent={<>date</>}
                triggerContent={
                  <div className="flex-center justify-start gap-2">
                    <p className="text-gray-400 font-medium text-xs">Take it By</p>
                    <div className="flex-center gap-1">
                      <CiLocationOn className="text-main" />
                      <p className="text-main text-xs font-medium">Mon 14 June, 08:05 PM</p>
                    </div>
                  </div>
                }
              />
              <CustomAccordion title="Payment Method" accordionContent triggerContent />
              <CustomAccordion title="Review Order" accordionContent triggerContent />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column: Order Summary  */}
      <div className="md:col-span-1 h-fit">
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
      </div>
    </div>
  );
}
