import Image from "next/image";
import React from "react";

export default function CornerVectors() {
  return (
    <>
      <Image
        src={"/assets/vectors/planets-vector.svg"}
        width={200}
        height={0}
        alt="Planets vector"
        className="absolute top-1/4 start-0 opacity-10 z-1"
        loading={"lazy"}
      />

      <Image
        src={"/assets/vectors/big-garlic-vector.svg"}
        width={210}
        height={0}
        alt="Big garlic vector"
        className="absolute bottom-0 end-0 z-1"
        loading={"lazy"}
      />
    </>
  );
}
