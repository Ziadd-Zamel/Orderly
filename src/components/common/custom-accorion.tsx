import { ReactNode } from "react";
import { MdErrorOutline } from "react-icons/md";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

interface Props {
  title: string;
  triggerContent: ReactNode;
  accordionContent: ReactNode;
}
export default function CustomAccordion({ title, triggerContent, accordionContent }: Props) {
  return (
    <Accordion className="w-full" type="single" collapsible>
      <AccordionItem
        value="item-1"
        className="border-gray-200 bg-white border-1 rounded-2xl px-6 py-4"
      >
        <AccordionTrigger className="cursor-pointer w-full group transition-all duration-500 ease-in-out p-0 hover:no-underline">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-black font-medium  flex items-center gap-2 text-lg">
                {title}
                <span>
                  <MdErrorOutline className="text-xl" />
                </span>
              </p>
            </div>
            <div className="mt-7 group-data-[state=open]:opacity-0 group-data-[state=open]:invisible group-data-[state=closed]:opacity-100 group-data-[state=closed]:visible group-data-[state=closed]:delay-200 transition-all duration-200">
              {triggerContent}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="transition-all duration-200 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          {accordionContent}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
