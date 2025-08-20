import Image from "next/image";
import React from "react";

export default function SliderVectors() {
  return (
    <>
      <Image
        src={"/assets/vectors/planets-vector.svg"}
        width={250}
        height={0}
        alt="Planets vector"
        className="w-[180px] md:w-auto absolute top-0 -left-4 md:left-10 -translate-y-1/2 z-10 opacity-15"
        loading={"lazy"}
      />

      <Image
        src={"/assets/vectors/garlic-vector.svg"}
        width={90}
        height={0}
        alt="Garlic vector"
        className="w-14 md:w-auto absolute bottom-0 left-8 md:translate-y-1/3 md:left-1/4 -rotate-90 z-10"
        loading={"lazy"}
      />

      <Image
        src={"/assets/vectors/mint-vector.svg"}
        width={250}
        height={0}
        alt="Mint vector"
        className="w-[160px] md:w-auto absolute right-0 bottom-0 translate-y-1/3 z-10"
        loading={"lazy"}
      />
    </>
  );
}
