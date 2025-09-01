import { CartButton, TrashButton } from "@/components/common/shared-buttons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronLeft, User } from "lucide-react";
import { useTranslations } from "next-intl";

export default function GroupMembersDialog() {
  const t = useTranslations();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="font-medium text-zinc-800">
          {t("group-members")}
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-white border-transparent rounded-4xl !max-w-xl  p-12">
        <DialogHeader className="flex flex-row items-center justify-center w-full mb-5">
          <DialogTitle className="text-center font-medium text-xl">
            {t("group-members")}
          </DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-between w-full border-b border-b-[#DCDBDB] pb-5 pt-1">
          <div className="flex items-center gap-3">
            <Avatar className="size-12">
              <AvatarImage src={"/assets/Images/avatar.png"} />
              <AvatarFallback>
                <User aria-hidden />
              </AvatarFallback>
            </Avatar>
            <p className="text-lg ">Maha Omar</p>
          </div>
          <div className="flex items-center gap-3">
            <CartButton className="text-xl" />
            <TrashButton />
          </div>
        </div>
        <div className="flex items-center justify-between w-full border-b border-b-[#DCDBDB] pb-5 pt-1">
          <div className="flex items-center gap-3">
            <Avatar className="size-12">
              <AvatarImage src={"/assets/Images/avatar.png"} />
              <AvatarFallback>
                <User aria-hidden />
              </AvatarFallback>
            </Avatar>
            <p className="text-lg ">Maha Omar</p>
          </div>
          <div className="flex items-center gap-3">
            <CartButton className="text-xl" />
            <TrashButton />
          </div>
        </div>
        <div className="flex items-center justify-between w-full border-b border-b-[#DCDBDB] pb-5 pt-1">
          <div className="flex items-center gap-3">
            <Avatar className="size-12">
              <AvatarImage src={"/assets/Images/avatar.png"} />
              <AvatarFallback>
                <User aria-hidden />
              </AvatarFallback>
            </Avatar>
            <p className="text-lg ">Maha Omar</p>
          </div>
          <div className="flex items-center gap-3">
            <CartButton className="text-xl" />
            <TrashButton />
          </div>
        </div>
        <div className="flex items-center justify-between w-full border-b border-b-[#DCDBDB] pb-5 pt-1">
          <div className="flex items-center gap-3">
            <Avatar className="size-12">
              <AvatarImage src={"/assets/Images/avatar.png"} />
              <AvatarFallback>
                <User aria-hidden />
              </AvatarFallback>
            </Avatar>
            <p className="text-lg ">Maha Omar</p>
          </div>
          <div className="flex items-center gap-3">
            <CartButton className="text-xl" />
            <TrashButton />
          </div>
        </div>
        <div className="flex items-center justify-between w-full border-b border-b-[#DCDBDB] pb-5 pt-1">
          <div className="flex items-center gap-3">
            <Avatar className="size-12">
              <AvatarImage src={"/assets/Images/avatar.png"} />
              <AvatarFallback>
                <User aria-hidden />
              </AvatarFallback>
            </Avatar>
            <p className="text-lg ">Maha Omar</p>
          </div>
          <div className="flex items-center gap-3">
            <CartButton className="text-xl" />
            <TrashButton />
          </div>
        </div>

        <DialogClose className="bg-[#DCEDEAE5] genz:bg-[#F9F5FF] size-10 rounded-sm flex-center absolute start-12 top-10">
          <ChevronLeft size={24} strokeWidth={1.5} className="rtl:rotate-180" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
