import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OrderSummary from "./order-summary";
import { CiCreditCard1 } from "react-icons/ci";
import CustomAccordion from "@/components/common/custom-accorion";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import PaymentMethod from "./payment-method";
import AddressForm from "./address-form";
import OrderCard from "@/components/common/order-card";
import CollapsedOrdersList from "@/components/common/collapsed-orders";

const productsImages = Array(9).fill("/assets/Images/test-product.png");

export default function CheckoutPage() {
  return (
    <div className="relative z-20 box-container grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-32 mb-20">
      {/* Left Column */}
      <div className="md:col-span-2 grid gap-6">
        <Card className="py-3 px-4 rounded-xl bg-gray-50">
          <CardHeader className="flex items-center gap-4">
            <div className="bg-[#DCEDEAE5] p-3 rounded-full">
              <CiCreditCard1 className="h-6 w-6 text-main" />
            </div>
            <CardTitle>
              <h2 className="text-lg font-medium">Vinny&apos;s</h2>
              <p className="text-sm text-gray-500">
                Order Type: <span className="text-main">Delivery</span>
              </p>
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 overflow-y-auto h-fit max-h-screen no-scrollbar">
            <div className="space-y-4">
              {/* Address */}
              <CustomAccordion
                title="Delivery Info"
                accordionContent={<AddressForm />}
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

              {/* Payment */}
              <CustomAccordion
                title="Payment Method"
                accordionContent={<PaymentMethod />}
                triggerContent={
                  <div className="flex items-center gap-2 -mt-2">
                    <span className="text-gray-600 text-xs sm:text-sm">Pay With</span>
                    <Image
                      src="/assets/icons/cash.svg"
                      alt="Cash with delivery"
                      width={30}
                      height={0}
                      loading="lazy"
                    />
                    <span className="text-main font-medium sm:text-base text-sm">
                      Cash On Delivery
                    </span>
                  </div>
                }
              />

              {/* Review Order */}
              <CustomAccordion
                title="Review Order"
                triggerContent={<CollapsedOrdersList productsImages={productsImages} />}
                accordionContent={
                  <div className="flex flex-col gap-3 mt-5">
                    {Array(6)
                      .fill(null)
                      .map((_, i) => (
                        <OrderCard key={i} />
                      ))}
                  </div>
                }
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Order Summary */}
      <div className="md:col-span-1 h-fit">
        <OrderSummary
          items={[
            { label: "Your Order", price: 100 },
            { label: "Group Order", price: 50 },
            { label: "Service Fee", price: 20 },
            { label: "Taxes", price: 10 },
          ]}
          total={180}
          companyName="Bazooka"
          onlyTotal
        />
      </div>
    </div>
  );
}
