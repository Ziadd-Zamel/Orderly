"use client";

import { motion, useAnimation } from "framer-motion";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const controls = useAnimation();

  const handleSwitch = async () => {
    // expand animation
    await controls.start({
      scale: 50,
      transition: { duration: 0.6, ease: "easeInOut" },
    });

    // switch theme
    setTheme(theme === "general" ? "genz" : "general");

    // shrink + move to left
    await controls.start({
      scale: 1,
      x: theme === "general" ? -window.innerWidth - 50 : 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    });

    console.log("InneWidth: ", -window.innerWidth / 2 + 40);
  };

  return (
    <motion.div
      className="fixed top-1/2 right-0 translate-x-2/3 size-44 rounded-full bg-black z-50 cursor-pointer"
      animate={controls}
      onClick={handleSwitch}
    />
  );
}
