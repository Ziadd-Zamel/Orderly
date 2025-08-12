import { Button } from "@/components/ui/button";

export default function OrderButtons() {
  return (
    <div className="flex items-center gap-3 py-3">
      <Button className="w-1/2" value={"default"}>
        Send Order
      </Button>
      <Button className="w-1/2" variant={"outline"}>
        Pay Now
      </Button>
    </div>
  );
}
