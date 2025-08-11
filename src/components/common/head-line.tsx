import Image from "next/image";
import { ReactNode } from "react";

export default function HeadLine({ children, title }: { children?: ReactNode; title: string }) {
  return (
    <div className="relative min-h-20 flex items-center justify-between w-full ">
      <Image
        src={"/assets/vectors/headline-vectors.svg"}
        alt="Frame"
        fill
        className="absolute inset-0"
      />
      <div className="box-container flex flex-row items-center justify-between w-full  relative z-10">
        <h3 className=" text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-800 self-start">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}
