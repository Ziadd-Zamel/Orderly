"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const Circles = ({
  className,
  circleClassName,
}: {
  className?: string;
  circleClassName?: string;
}) => {
  const [circleCount, setCircleCount] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const calculateCircleCount = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const circleSize = 20;
        const gap = 4;
        const totalCircleWidth = circleSize + gap;
        const count = Math.floor(containerWidth / totalCircleWidth);
        setCircleCount(count > 0 ? count : 1);
      }
    };

    calculateCircleCount();
    window.addEventListener("resize", calculateCircleCount);

    return () => window.removeEventListener("resize", calculateCircleCount);
  }, []);

  return (
    <div ref={containerRef} className={cn("w-full flex gap-1 justify-center", className)}>
      {Array.from({ length: circleCount }, (_, i) => (
        <span key={i} className={cn("block size-5 rounded-full bg-gray-50", circleClassName)} />
      ))}
    </div>
  );
};
