import TrackingStatus from "./tracking-status";
import ItemsContainer from "./items-container";
import PaymentSummary from "./payment-summary";

export default function OrderDetails() {
  return (
    <section className="mt-32 mb-10">
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
    </section>
  );
}
