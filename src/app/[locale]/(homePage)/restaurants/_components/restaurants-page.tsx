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
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Filter Sidebar - Hidden on mobile, shown on large screens */}
          <div className="max-w-[30%]">
            <h3 className="text-main genz:text-gradient mb-16 hidden text-2xl font-medium lg:block">
              {t("filter-options")}
            </h3>
            <Filter />
          </div>

          <div className="min-w-0 flex-1">
            {/* Search Bar */}
            <div
              className="bg-main/10 genz:bg-gray-100 relative mx-auto mb-10 flex w-full max-w-xl gap-2 rounded-full p-1.5"
              aria-label="Serach"
            >
              <Input
                className="bg-background genz:bg-gray-100 h-10 w-4/5 border-none"
                placeholder={t("search")}
              />
              {/* Search Button */}
              <Button className="w-[30%] rounded-full" aria-label={""}>
                {t("search") || "Search"}
              </Button>
            </div>

            {/* Places Grid */}
            <PlacesGrid places={places} />
            <div className="mt-32">
              <PaginationComp currentPage={1} totalPages={4} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
