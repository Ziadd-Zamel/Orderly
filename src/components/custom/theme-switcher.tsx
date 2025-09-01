"use client";

import { motion, useAnimation } from "framer-motion";
import { ArrowBigLeft, ChevronLeft } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function ThemeSwitcher() {
  // States
  const [showContent, setShowContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Hooks
  const { theme, setTheme } = useTheme();
  const controls = useAnimation();

  // Functions
  const handleSwitch = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // expand animation
    await controls.start({
      scale: 50,
      transition: { duration: 1, ease: "easeInOut" },
    });

    // switch theme
    setTheme(theme === "general" ? "genz" : "general");
    setShowContent(true);

    setTimeout(() => setShowContent(false), 3000);

    // shrink + يرجع تاني يمين زي ما كان
    await controls.start({
      scale: 1,
      x: 0, // بيرجع لنفس مكانه
      transition: { duration: 1, ease: "easeInOut", delay: 2.5 },
    });

    setIsAnimating(false);
  };

  return (
    <>
      <motion.div
        className="fixed top-2/3 -right-3 z-50 flex h-24 w-10 cursor-pointer items-center justify-center rounded-l-full bg-gradient-to-br from-purple-500 to-cyan-400 shadow-lg md:h-28 md:w-12 lg:h-32 lg:w-14"
        animate={controls}
        onClick={handleSwitch}
      >
        {!isAnimating && <ChevronLeft className="me-3 size-6 text-white sm:size-7" />}
      </motion.div>

      {showContent && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[999] flex flex-col items-center justify-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main title */}
          <motion.div
            className="mb-16 text-center text-4xl font-semibold md:text-5xl"
            initial={{ opacity: 0, scale: 0.5, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 120,
            }}
          >
            <h1>{theme === "genz" ? "GEN Z" : "GENERAL"}</h1>
            <p>MODE</p>
          </motion.div>

          {/* Bouncing yellow ball */}
          <motion.div
            className="bg-custom-orange h-7 w-7 rounded-full drop-shadow-2xl"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 8,
              mass: 2,
              delay: 0.5,
            }}
          />

          {/* Sparkles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-${(i % 2) + 2} h-${(i % 2) + 2} rounded-full bg-white`}
              style={{
                top: `${20 + i * 15}%`,
                left: `${15 + i * 12}%`,
              }}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1 + i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </>
  );
}
