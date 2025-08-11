import Link from "next/link";
import { ChevronLeft, Users, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const groupMembers = [
  "/placeholder.svg?height=32&width=32",
  "/placeholder.svg?height=32&width=32",
  "/placeholder.svg?height=32&width=32",
  "/placeholder.svg?height=32&width=32",
  "/placeholder.svg?height=32&width=32",
  "/placeholder.svg?height=32&width=32",
  "/placeholder.svg?height=32&width=32",
  "/placeholder.svg?height=32&width=32",
  "/placeholder.svg?height=32&width=32",
  "/placeholder.svg?height=32&width=32",
];
export default function MyCart() {
  return (
    <Card className="rounded-xl shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <ChevronLeft className="h-5 w-5 text-gray-500" />
          <CardTitle className="text-lg font-semibold">My Cart</CardTitle>
        </div>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User Avatar" />
          <AvatarFallback>
            <Users className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-gray-500" />
          <span className="text-sm font-medium text-gray-600">Group Members</span>
          <div className="flex -space-x-2 ml-2">
            {groupMembers.slice(0, 3).map((src, index) => (
              <Avatar key={index} className="h-8 w-8 border-2 border-white">
                <AvatarImage src={src || "/placeholder.svg"} alt={`Group Member ${index + 1}`} />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            ))}
            {groupMembers.length > 3 && (
              <Avatar className="h-8 w-8 border-2 border-white bg-gray-200 text-gray-600 text-xs flex items-center justify-center">
                <AvatarFallback>{`+${groupMembers.length - 3}`}</AvatarFallback>
              </Avatar>
            )}
          </div>
        </div>
        <Link
          href="#"
          className="text-[#2ECC71] font-medium text-sm flex items-center gap-1"
          prefetch={false}
        >
          Add Members
          <ChevronLeft className="h-4 w-4 rotate-180" />
        </Link>
      </CardContent>
    </Card>
  );
}
