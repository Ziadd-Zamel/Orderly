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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FaShareAlt } from "react-icons/fa";
import { Label } from "@/components/ui/label";

export default function GroupButton() {
  const [open, setOpen] = useState(false);
  const t = useTranslations();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button
          variant={'ghost'}
          className="text-main genz:text-gradient font-medium flex  items-center gap-1 mt-5 self-end hover:underline"
        >
          <ChevronRight size={16} aria-hidden className="genz:text-purple-500 rotate-180 rtl:block hidden" />
          {t("add-members")}
          <ChevronRight size={16} aria-hidden className="genz:text-purple-500 rtl:hidden " />
        </Button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="w-full rounded-3xl bg-white py-10">
        <DialogHeader dir="ltr" className="flex flex-row">
          <div className="w-1/3">
            <Button variant={'ghost'}  className="bg-second hover:bg-second text-main cursor-pointer">
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
              <Button variant={"ghost"} className="text-main absolute genz:text-purple-400 top-0 end-0 h-full bg-transparent hover:bg-transparent">
                <FaShareAlt size={20} />
              </Button>
            </div>
          </div>

          <Button className="mb-3 w-full py-4 text-xl">{t("continue-shopping")}</Button>

          {/* Delete group button */}
          <Button variant={"ghost"} className="text-custom-orange genz:text-red-500 w-full bg-transparent font-medium underline hover:bg-transparent">
            {t("delete-group")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
