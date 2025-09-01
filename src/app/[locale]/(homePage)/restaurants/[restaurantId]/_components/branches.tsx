import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@/i18n/routing";
import { branches } from "@/lib/constants/data.constant";
import { useTranslations } from "next-intl";
import { FaLocationDot } from "react-icons/fa6";

export default function Branches() {
  const t = useTranslations();

  return (
    <div className="box-container mt-20 w-full pb-20">
      <h2 className="mb-6 text-xl font-semibold text-zinc-800 sm:text-2xl">{t("all-branches")}</h2>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:gap-40">
        <div className="space-y-5">
          <Accordion type="single" collapsible className="w-full">
            {branches.map((branch, index) => (
              <AccordionItem
                key={index}
                value={`branch-${index}`}
                className="border-b !border-zinc-100 pt-5 pb-8 last:border-b-0"
              >
                <AccordionTrigger className="flex cursor-pointer items-center gap-4 py-4 text-left hover:no-underline">
                  <div className="flex items-center gap-4">
                    <span className="genz:bg-[#A259FF1A] rounded-lg bg-[#FF9C001A] p-2">
                      <FaLocationDot className="text-custom-orange genz:text-purple-500 text-2xl" />
                    </span>
                    <span className="text-lg font-medium text-black sm:text-xl">{branch.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="mt-5 pr-4 text-base text-zinc-500 sm:text-xl">
                  {branch.address}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div>
          <div className="flex w-full justify-end pb-5">
            <Link
              href={"#"}
              className="text-main genz:text-purple-500 text-right text-xl font-medium underline"
            >
              {t("view-map")}
            </Link>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-3xl bg-gray-200">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.376441355474!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2seg!4v1628000000000!5m2!1sen!2seg"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
