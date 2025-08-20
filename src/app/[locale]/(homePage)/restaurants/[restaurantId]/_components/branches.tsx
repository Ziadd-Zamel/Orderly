import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@/i18n/routing";
import { branches } from "@/lib/constants/data.constant";
import { FaLocationDot } from "react-icons/fa6";

export default function Branches() {
  return (
    <div className="w-full box-container mt-20 pb-20">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900">All Branches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-40">
        <div className="space-y-5">
          <Accordion type="single" collapsible className="w-full">
            {branches.map((branch, index) => (
              <AccordionItem
                key={index}
                value={`branch-${index}`}
                className="border-b last:border-b-0 pb-8 pt-5"
              >
                <AccordionTrigger className="py-4 flex items-center gap-4 text-left hover:no-underline cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="bg-[#FF9C001A] p-2 rounded-lg">
                      <FaLocationDot className="text-2xl text-custom-orange" />
                    </span>
                    <span className="text-black font-medium text-lg sm:text-xl">{branch.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-zinc-500 text-base sm:text-xl pr-4 mt-5">
                  {branch.address}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div>
          <div className="flex w-full justify-end pb-5">
            <Link href={"#"} className="text-main font-medium underline text-xl text-right">
              View on map
            </Link>
          </div>
          <div className="bg-gray-200 overflow-hidden h-[400px] relative rounded-3xl">
            <iframe
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
