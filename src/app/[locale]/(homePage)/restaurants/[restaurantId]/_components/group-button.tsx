"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GroupButton({ disableAnimation }: { disableAnimation?: boolean }) {
  return (
    <>
      {disableAnimation ? (
        <div className="size-16 flex-center bg-main rounded-full">
          <Image src={"/assets/icons/group.svg"} alt="group icon" width={40} height={40} />
        </div>
      ) : (
        <motion.div
          className="bg-main rounded-full flex items-center flex-shrink-0 overflow-hidden border-4 border-main"
          initial={{ width: 64, height: 64 }}
          animate={{
            width: [64, 180, 64],
          }}
          transition={{
            duration: 3,
            times: [0, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          <div className="size-16 flex-center bg-main rounded-full flex-shrink-0">
            <Image src={"/assets/icons/group.svg"} alt="group icon" width={40} height={40} />
          </div>
          <motion.span
            className="text-white font-medium whitespace-nowrap pr-4 bg-main"
            transition={{
              duration: 3,
              times: [0, 0.2, 1],
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
          >
            Group Order
          </motion.span>
        </motion.div>
      )}
    </>
  );
}
