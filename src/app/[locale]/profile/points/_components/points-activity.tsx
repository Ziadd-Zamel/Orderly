import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function PointsActivity() {
  return (
    <section className="mt-16 w-full" aria-labelledby="points-activity-title">
      <h3 id="points-activity-title" className="font-medium text-2xl">
        Points Activity
      </h3>

      <div className="flex flex-col gap-5 mt-10">
        <div
          className="flex items-center justify-between bg-[#FCFCFC] p-6 rounded-2xl w-full flex-wrap max-w-[700px]"
          aria-label="Order, expires 15-01-2025, 15 points"
        >
          <div className="flex items-center gap-5">
            <Avatar className="size-16">
              <AvatarFallback>Ha</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-xl">Order</p>
              <time dateTime="2025-01-15" className="font-medium text-lg text-zinc-600">
                EXP: 15-01-2025
              </time>
            </div>
          </div>

          <Badge
            className="text-custom-orange genz:text-red-500 bg-[#FF9C001A] genz:bg-red-100 py-2.5 px-2 text-xl rounded-2xl mt-5 sm:mt-0"
            aria-label="15 points"
          >
            15 Points
          </Badge>
        </div>
      </div>
    </section>
  );
}
