import Link from "next/link";
import { ChevronLeft, User, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";

const groupMembers = Array(10).fill("/placeholder.svg?height=32&width=32");

export default function MyCart() {
  const visibleMembers = groupMembers.slice(0, 3);
  const extraCount = groupMembers.length - visibleMembers.length;
  const t = useTranslations();
  return (
    <Card className="shadow-none bg-gray-50 border-none">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        {/* Back button placeholder */}
        <button
          type="button"
          aria-label="Go back"
          className="p-1 hover:text-main transition-colors"
        >
          <ChevronLeft className="rtl:rotate-180" />
        </button>

        <CardTitle className="text-lg font-semibold text-zinc-900">{t("my-cart")}</CardTitle>

        <Avatar className="size-16">
          <AvatarFallback>
            <User aria-hidden />
          </AvatarFallback>
        </Avatar>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between flex-wrap gap-2 w-full">
          {/* Group Members Title */}
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/teamwork.svg"
              alt="Teamwork icon"
              width={30}
              height={30}
              loading="lazy"
            />
            <span className="font-medium text-zinc-800">{t("group-members")}</span>
          </div>

          {/* Member Avatars */}
          <div className="flex -space-x-2 ml-2">
            {visibleMembers.map((src, index) => (
              <Avatar
                key={index}
                className="size-12 border-2 border-white"
                title={`Group Member ${index + 1}`}
              >
                <AvatarImage src={src} alt={`Group Member ${index + 1}`} loading="lazy" />
                <AvatarFallback>
                  <User size={20} aria-hidden />
                </AvatarFallback>
              </Avatar>
            ))}

            {extraCount > 0 && (
              <Avatar className="size-12 border-2 border-white bg-gray-200 text-gray-600 text-xs flex items-center justify-center">
                <AvatarFallback>{`+${extraCount}`}</AvatarFallback>
              </Avatar>
            )}
          </div>
        </div>

        {/* Add Members Link */}
        <Link
          href="#"
          className="text-main genz:text-gradient font-medium flex items-center gap-1 mt-5 self-end hover:underline"
          prefetch={false}
        >
          {t("add-members")}
          <ChevronRight size={16} aria-hidden className="genz:text-purple-500 rtl:rotate-180" />
        </Link>
      </CardContent>
    </Card>
  );
}
