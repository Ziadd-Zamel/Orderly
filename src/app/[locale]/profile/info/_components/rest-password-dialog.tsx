"use client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { PasswordInput } from "../../../auth/_components/password-input";
import { ArrowRight } from "lucide-react";

export default function PasswordDialog({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md p-8 bg-white rounded-4xl">
        <DialogHeader className="text-center mb-8">
          <DialogTitle className="text-2xl font-medium text-black text-center">
            Change Password
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <FormItem>
            <FormLabel>Old Password</FormLabel>
            <FormControl className="relative">
              <PasswordInput variant="outline" placeholder="your password" type="password" />
            </FormControl>
          </FormItem>
          <FormItem>
            <FormLabel>New Password</FormLabel>
            <FormControl className="relative">
              <PasswordInput variant="outline" placeholder="your password" type="password" />
            </FormControl>
          </FormItem>
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl className="relative">
              <PasswordInput variant="outline" placeholder="your password" type="password" />
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
