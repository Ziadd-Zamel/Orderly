"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const imageSrc = pathname.includes("register")
    ? "/assets/Images/register-image.png"
    : "/assets/Images/login-image.png";

  return (
    <div className="grid min-h-svh lg:grid-cols-2 p-6">
      {children}

      <div className="relative hidden lg:block">
        <Image
          src={imageSrc}
          alt="Auth Image"
          fill
          className="absolute inset-0 h-full w-full object-cover rounded-4xl"
          priority
        />
      </div>
    </div>
  );
}
