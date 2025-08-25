"use client";

import { motion, useAnimation } from "framer-motion";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const controls = useAnimation();
  const [showContent, setShowContent] = useState(false);

  const handleSwitch = async () => {
    // expand animation
    await controls.start({
      scale: 35,
      transition: { duration: 1.5, ease: "easeInOut" },
    });

    // show content
    setTheme(theme === "general" ? "genz" : "general");
    setShowContent(true);

    // wait 7s for content animation
    await new Promise((resolve) => setTimeout(resolve, 7000));

    // shrink + move back
    await controls.start({
      scale: 1,
      x: theme === "general" ? -window.innerWidth - 50 : 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    });

    setShowContent(false);
  };

  return (
    <>
      {/* button */}
      <motion.div
        className="fixed top-1/2 right-0 translate-x-2/3 size-16 rounded-full z-50 cursor-pointer"
        style={{
          background: "linear-gradient(135deg, #A259FF, #00F0B5)",
        }}
        initial={{scale: 1}}
        animate={{scale: 20}}
        onClick={handleSwitch}
      />

      {/* fullscreen content */}
      {showContent && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-50 overflow-hidden">
          <h1 className="text-5xl font-bold mb-12">GEN Z MODE</h1>

          {/* yellow bouncing ball */}
          <motion.div
            className="w-16 h-16 rounded-full bg-yellow-400"
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
              mass: 0.6,
              duration: 3,
            }}
          />
        </div>
      )}
    </>
  );
}
