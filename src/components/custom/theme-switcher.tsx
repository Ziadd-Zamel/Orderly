"use client";

import { motion, useAnimation } from "framer-motion";
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
      transition: { duration: 1.5, ease: "easeInOut" },
    });

    // switch theme
    setTheme(theme === "general" ? "genz" : "general");
    setShowContent(true);

    setTimeout(() => setShowContent(false), 5000);
    // shrink + move to left
    await controls.start({
      scale: 1,
      x: theme === "general" ? -window.innerWidth - 50 : 0,
      transition: { duration: 1.5, ease: "easeInOut", delay: 4 },
    });
    setIsAnimating(false);
  };

  return (
    <>
      <motion.div
        className="fixed top-1/2 right-0 translate-x-2/3 size-44 rounded-full bg-gradient-to-br from-fuchsia-600 to-blue-400 z-50 cursor-pointer overflow-hidden"
        animate={controls}
        onClick={handleSwitch}
      />

      {showContent && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center text-white z-[999] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main title */}
          <motion.div
            className="text-4xl md:text-5xl font-semibold mb-16 text-center"
            initial={{ opacity: 0, scale: 0.5, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            }}
          >
            <h1 className="">{theme === "genz" ? "GEN Z" : "GENERAL"}</h1>

            <p className="">MODE</p>
          </motion.div>

          {/* Bouncing yellow ball */}
          <motion.div
            className="w-7 h-7 rounded-full bg-custom-orange drop-shadow-2xl"
            initial={{
              y: -200,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 8,
              mass: 2,
              delay: 0.8,
            }}
          />

          {/* Enhanced sparkle effects */}
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
                duration: 2.5,
                repeat: Infinity,
                delay: 1.2 + i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </>
  );
}
