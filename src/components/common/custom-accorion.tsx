import { ReactNode } from "react";
import { MdErrorOutline } from "react-icons/md";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  triggerContent: ReactNode;
  accordionContent: ReactNode;
  className?:string
}
export default function CustomAccordion({ title, triggerContent, accordionContent,className }: Props) {
  return (
    <Accordion className="w-full" type="single" collapsible>
      <AccordionItem
        value="item-1"
        className="border-gray-200 genz:border-gradient bg-white border-1 border-b   rounded-2xl px-6 py-5"
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
        <AccordionContent className={cn("transition-all duration-200 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",className)}>
          {accordionContent}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
