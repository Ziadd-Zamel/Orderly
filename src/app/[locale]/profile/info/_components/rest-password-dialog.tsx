"use client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { PasswordInput } from "../../../auth/_components/password-input";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PasswordDialog({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  // Translation
  const t = useTranslations();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md p-8 bg-white rounded-4xl border-none">
        <DialogHeader className="text-center mb-8">
          <DialogTitle className="text-2xl font-medium text-black text-center">
            {t("change-password")}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <FormItem className="gap-2">
            <FormLabel>{t("current-password")}</FormLabel>
            <FormControl className="relative">
              <PasswordInput
                className="border-[#F0EEF0]"
                variant="outline"
                placeholder="****************"
              />
            </FormControl>
          </FormItem>
          <FormItem className="gap-2">
            <FormLabel>{t("new-password")}</FormLabel>
            <FormControl className="relative">
              <PasswordInput
                className="border-[#F0EEF0]"
                variant="outline"
                placeholder="****************"
              />
            </FormControl>
          </FormItem>
          <FormItem className="gap-2">
            <FormLabel>{t("confirm-password")}</FormLabel>
            <FormControl className="relative">
              <PasswordInput
                className="border-[#F0EEF0]"
                variant="outline"
                placeholder="****************"
              />
            </FormControl>
          </FormItem>
          <Button
            className="w-full h-12 mt-8 rounded-xl"
            onClick={() => {
              toast("Password updated successfully!");
              setIsOpen(false);
            }}
          >
            Done
            <ArrowRight />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
