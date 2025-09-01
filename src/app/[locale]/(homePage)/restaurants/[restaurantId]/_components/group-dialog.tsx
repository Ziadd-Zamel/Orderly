import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import GroupButton from "./general-group-button";

export default function GroupDialog() {
  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <GroupButton />
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="w-full !max-w-2xl rounded-3xl bg-white py-10">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">Add New Address</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
