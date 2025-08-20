import TrackingStatus from "./tracking-status";
import ItemsContainer from "./items-container";
import PaymentSummary from "./payment-summary";
import CornerVectors from "@/components/common/corner-vectors";

export default function OrderDetails() {
  return (
    <>
      <section className="relative z-20 mt-32 mb-10">
        <div className="box-container flex flex-col lg:flex-row gap-6">
          {/* Order status summary */}
          <div className="w-full lg:w-2/3 space-y-6">
            {/* Tracking Information Box */}
            <TrackingStatus />

            {/* Order's Items Container */}
            <ItemsContainer />
          </div>

          {/* Payments summary */}
          <PaymentSummary />
        </div>

        {/* Vectors Decoration */}
      </section>

      <CornerVectors />
    </>
  );
}
