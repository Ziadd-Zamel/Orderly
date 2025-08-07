"use client";
import { useEffect, useRef } from "react";

export default function WavyLine() {
  const pathRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const dot = dotRef.current;
    let delay = 0;

    // إنشاء نسخ من النقاط
    for (let i = 0; i < 5; i++) {
      const newDot = dot.cloneNode();
      newDot.style.animationDelay = `${delay}s`;
      dot.parentNode.appendChild(newDot);
      delay += 0.4;
    }
  }, []);

  return (
    <div className="relative h-[400px] w-[600px] bg-white overflow-hidden">
      <svg className="absolute left-12" width="500" height="400">
        <path
          ref={pathRef}
          d="M 0 200 Q 100 150 200 200 T 400 200"
          stroke="#f4a261"
          strokeWidth="2"
          fill="none"
          className="wavy-line"
        />
      </svg>
      <div
        ref={dotRef}
        className="absolute w-2.5 h-2.5 bg-[#f4a261] rounded-full"
        style={{ left: 0, top: "50%", transform: "translateY(-50%)" }}
      />
      <style jsx>{`
        .wavy-line {
          animation: draw 2s linear forwards, wave 1s ease-in-out infinite;
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes wave {
          0%,
          100% {
            d: path("M 0 200 Q 100 150 200 200 T 400 200");
          }
          50% {
            d: path("M 0 200 Q 100 250 200 200 T 400 200");
          }
        }
        .bg-[#f4a261] {
          animation: move 2s linear forwards, bounce 1s ease-in-out infinite;
        }
        @keyframes move {
          from {
            left: 0;
            top: 50%;
          }
          to {
            left: 500px;
            top: 10%;
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(-50%);
          }
          50% {
            transform: translateY(calc(-50% - 10px));
          }
        }
      `}</style>
    </div>
  );
}
