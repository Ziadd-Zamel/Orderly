import PaginationComp from "@/components/common/pagination-comp";
import Filter from "./filter";
import PlacesGrid from "./places-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { places } from "@/lib/constants/data.constant";

export default function RestaurantsPage() {
  return (
    <section className="">
      <div className="box-container mt-32 mb-14">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter Sidebar - Hidden on mobile, shown on large screens */}
          <div className="">
            <h3 className="lg:block hidden text-2xl text-main font-medium">Filter Options</h3>
            <Filter />
          </div>

          <div className="flex-1 min-w-0">
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto px-4 mb-5">
              <Input
                type="text"
                placeholder="search for places"
                className="w-full pl-8 pr-12 sm:pr-24 py-3 sm:py-4 bg-main/10 border-0 rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
              />
              <Button className="absolute font-normal inset-y-0 right-1 my-1 px-6 sm:w-36  text-white rounded-full transition-colors duration-200 text-sm">
                search
              </Button>
            </div>

            {/* Places Grid */}
            <PlacesGrid places={places} />
            <PlacesGrid places={places} />
          </div>
        </div>
      </div>

      <PaginationComp currentPage={1} totalPages={4} />
    </section>
  );
}
