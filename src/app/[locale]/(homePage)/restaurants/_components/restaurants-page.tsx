import PaginationComp from "@/components/common/pagination-comp";
import Filter from "./filter";
import PlacesGrid from "./places-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { places } from "@/lib/constants/data.constant";
import { useTranslations } from "next-intl";

export default function RestaurantsPage() {
  // Translations
  const t = useTranslations();

  return (
    <>
      <section className="box-container mt-32 mb-16">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter Sidebar - Hidden on mobile, shown on large screens */}
          <div className="">
            <h3 className="lg:block hidden text-2xl text-main genz:text-gradient font-medium mb-16">
              Filter Options
            </h3>
            <Filter />
          </div>

          <div className="flex-1 min-w-0">
            {/* Search Bar */}
            <div
              className="w-full relative max-w-xl p-1.5 bg-main/10 genz:bg-gray-100 flex gap-2 rounded-full mx-auto mb-10"
              aria-label="Serach"
            >
              <Input
                className="bg-background genz:bg-gray-100 border-none w-4/5 h-10"
                placeholder={"Search..."}
              />
              {/* Search Button */}
              <Button className="rounded-full w-[30%]" aria-label={""}>
                {t("search") || "Search"}
              </Button>
            </div>

            {/* Places Grid */}
            <PlacesGrid places={places} />
            <PlacesGrid places={places} />
            <div className=" mt-32">
              <PaginationComp currentPage={1} totalPages={4} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
