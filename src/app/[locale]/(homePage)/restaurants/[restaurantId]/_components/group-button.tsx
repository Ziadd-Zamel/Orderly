"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FaShareAlt } from "react-icons/fa";
import { Label } from "@/components/ui/label";

function GroupTrigger({ disableAnimation }: { disableAnimation?: boolean }) {
  return (
    <>
      {disableAnimation ? (
        <div className="size-16 flex-center bg-main genz:!bg-gradient circle">
          <Image src={"/assets/icons/group.svg"} alt="group icon" width={40} height={40} />
        </div>
      ) : (
        <motion.div
          className="bg-main genz:bg-gradient circle flex items-center flex-shrink-0 overflow-hidden border-4 border-main"
          initial={{ width: 64, height: 64 }}
          animate={{
            width: [64, 200, 64],
          }}
          transition={{
            duration: 5,
            times: [0, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        >
          <div className="size-16 flex-center bg-main circle flex-shrink-0">
            <Image src={"/assets/icons/group.svg"} alt="group icon" width={40} height={40} />
          </div>
          <motion.span
            className="text-white font-medium whitespace-nowrap pr-4"
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

export default function GroupButton({ disableAnimation }: { disableAnimation?: boolean }) {
  const [open, setOpen] = useState(false);
  const t = useTranslations();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button className="bg-transparent hover:bg-transparent genz:bg-transparent cursor-pointer border-none outline-none">
          <GroupTrigger disableAnimation={disableAnimation} />
        </Button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent className=" w-full bg-white rounded-3xl py-10">
        <DialogHeader className="flex flex-row">
          <div className="w-1/3">
            <Button className="bg-second hover:bg-second cursor-pointer text-main">
              <ChevronLeft size={20} />
            </Button>
          </div>
          <DialogTitle className="text-2xl w-2/3 ps-5 leading-10">{t("group-order")}</DialogTitle>
        </DialogHeader>

        <div className="p-5">
          <div className="my-6">
            <Image
              src={"/assets/Images/qr-code.png"}
              alt="Group Order"
              width={150}
              height={0}
              className="rounded-2xl mx-auto"
            />
          </div>

          <div className="relative">
            <span className="block w-full text-center text-zinc-300 text-base before:w-[47%] before:h-[1px] before:bg-zinc-300 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 after:w-[47%] after:h-[1px] after:bg-zinc-300 after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2">
              Or
            </span>
          </div>

          {/* Share Link Input */}
          <div className="relative mt-6 mb-10">
            <Label htmlFor="invitation-link" className="text-lg text-zinc-800 font-normal mb-1">
              {t("invitation-link")}
            </Label>
            <div className="relative">
              <Input
                id="invitation-link"
                value={"www.google.com/"}
                className="text-base"
                readOnly
              />
              <Button className="absolute right-0 top-0 h-full bg-transparent hover:bg-transparent text-main">
                <FaShareAlt size={20} />
              </Button>
            </div>
          </div>

          <Button className="w-full mb-3 py-5 text-xl">{t("continue-shopping")}</Button>

          {/* Delete group button */}
          <Button className="w-full bg-transparent hover:bg-transparent text-custom-orange font-medium underline">
            {t("delete-group")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
