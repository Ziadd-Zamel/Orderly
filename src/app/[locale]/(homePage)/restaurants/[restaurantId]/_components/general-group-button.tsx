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
import { useTheme } from "next-themes";
import IconGradient from "@/components/common/icon-gradiant";

function GroupTrigger({ disableAnimation }: { disableAnimation?: boolean }) {
  // Translation
  const t = useTranslations();

  return (
    <>
      {disableAnimation ? (
        <div className="flex-center bg-main genz:!bg-red-500 bg-gradient circle size-16">
          <Image src={"/assets/icons/group.svg"} alt="group icon" width={40} height={40} />
        </div>
      ) : (
        <motion.div
          className="bg-main genz:bg-gradient circle border-main genz:border-gradient genz:bg-transparent flex flex-shrink-0 items-center overflow-hidden border-4"
          initial={{ width: 64, height: 64 }}
          animate={{
            width: [64, 200, 64],
          }}
          transition={{
            duration: 3.5,
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          <div className="flex-center bg-main genz:bg-gradient circle size-16 flex-shrink-0">
            <Image src={"/assets/icons/group.svg"} alt="group icon" width={40} height={40} />
          </div>
          <motion.span
            className="pr-4 font-medium whitespace-nowrap text-white"
            transition={{
              duration: 3,
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            {t("order-as-group")}
          </motion.span>
        </motion.div>
      )}
    </>
  );
}

export default function GroupButton({ disableAnimation }: { disableAnimation?: boolean }) {
  const [open, setOpen] = useState(false);
  const t = useTranslations();
  const { resolvedTheme } = useTheme();
  const isGenz = resolvedTheme === "genz";
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button className="genz:bg-transparent cursor-pointer border-none bg-transparent outline-none hover:bg-transparent">
          <GroupTrigger disableAnimation={disableAnimation} />
        </Button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="w-full rounded-3xl bg-white py-10">
        <DialogHeader className="flex flex-row">
          <div className="w-1/3">
            <Button className="bg-second hover:bg-second text-main cursor-pointer">
              <ChevronLeft size={20} />
            </Button>
          </div>
          <DialogTitle className="w-2/3 ps-5 text-2xl leading-10">{t("group-order")}</DialogTitle>
        </DialogHeader>

        <div className="p-5">
          <div className="my-6">
            <Image
              src={"/assets/Images/qr-code.png"}
              alt="Group Order"
              width={150}
              height={0}
              className="mx-auto rounded-2xl"
            />
          </div>

          <div className="relative">
            <span className="block w-full text-center text-base text-zinc-300 before:absolute before:top-1/2 before:left-0 before:h-[1px] before:w-[47%] before:-translate-y-1/2 before:bg-zinc-300 after:absolute after:top-1/2 after:right-0 after:h-[1px] after:w-[47%] after:-translate-y-1/2 after:bg-zinc-300">
              Or
            </span>
          </div>

          {/* Share Link Input */}
          <div className="relative mt-6 mb-10">
            <Label htmlFor="invitation-link" className="mb-1 text-lg font-normal text-zinc-800">
              {t("invitation-link")}
            </Label>
            <div className="relative">
              <Input
                id="invitation-link"
                value={"www.google.com/"}
                className="text-base"
                readOnly
              />
              <Button className="text-main absolute top-0 right-0 h-full bg-transparent hover:bg-transparent">
                <FaShareAlt size={20} />
              </Button>
            </div>
          </div>

          <Button className="mb-3 w-full py-5 text-xl">{t("continue-shopping")}</Button>

          {/* Delete group button */}
          <Button className="text-custom-orange w-full bg-transparent font-medium underline hover:bg-transparent">
            {t("delete-group")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
