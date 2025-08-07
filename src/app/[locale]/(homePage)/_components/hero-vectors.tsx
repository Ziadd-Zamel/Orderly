import Image from "next/image";
import React from "react";

export default function BackgroundVectors() {
  return (
    <>
      <Image
        src={"/assets/vectors/cake-vector.svg"}
        width={60}
        height={0}
        alt="Cake vector"
        className="absolute top-1/3 start-[30%] z-10"
        loading={"lazy"}
      />

      <Image
        src={"/assets/vectors/pizza-vector.svg"}
        width={150}
        height={0}
        alt="Pizza vector"
        className="absolute top-1/2 start-0 -translate-x-1/2 z-10"
        loading={"lazy"}
      />

      <Image
        src={"/assets/vectors/paper-vector.svg"}
        width={40}
        height={0}
        alt="Paper vector"
        className="absolute top-1/2 start-1/2 z-10"
        loading={"lazy"}
      />

      <Image
        src={"/assets/vectors/paper-vector.svg"}
        alt="Paper vector"
        dir="rtl"
        width={75}
        height={0}
        className="absolute top-4/5 end-2.5 scale-x-[-1] z-10"
        loading={"lazy"}
      />
    </>
  );
}
