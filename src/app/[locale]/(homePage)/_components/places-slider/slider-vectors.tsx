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
        className="absolute top-0 start-10 -translate-y-1/2 z-10 opacity-15"
        loading={"lazy"}
      />
      <Image
        src={"/assets/vectors/garlic-vector.svg"}
        width={90}
        height={0}
        alt="Garlic vector"
        className="absolute bottom-0 translate-y-1/3 start-[25%] -rotate-90 z-10"
        loading={"lazy"}
      />
      <Image
        src={"/assets/vectors/mint-vector.svg"}
        width={250}
        height={0}
        alt="Mint vector"
        className="absolute end-0 bottom-0 translate-y-1/3 z-10"
        loading={"lazy"}
      />
    </>
  );
}
