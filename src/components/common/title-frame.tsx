import Image from "next/image";
import { ReactNode } from "react";

export default function TitleFrame({ children, title }: { children?: ReactNode; title: string }) {
  return (
    <div className="relative min-h-20 flex items-center justify-between w-full ">
      <Image src={"/assets/Images/title-fram.png"} alt="Frame" fill className="absolute inset-0" />
      <div className="box-container flex flex-row items-center justify-between w-full  relative z-10">
        <h3 className=" text-xl sm:text-4xl font-medium text-zinc-950 self-start">{title}</h3>
        {children}
      </div>
    </div>
  );
}
