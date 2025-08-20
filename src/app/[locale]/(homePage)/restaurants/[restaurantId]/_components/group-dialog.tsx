import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import GroupButton from "./group-button";

export default function GroupDialog() {
  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <GroupButton />
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="!max-w-2xl w-full bg-white rounded-3xl py-10">
        <DialogHeader>
          <DialogTitle className="text-xl text-center">Add New Address</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
