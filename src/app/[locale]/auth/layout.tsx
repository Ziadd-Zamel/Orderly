import Image from "next/image";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 p-6">
      {children}{" "}
      <div className="relative hidden lg:block">
        <Image
          src="/assets/Images/login-image.png"
          alt="Image"
          fill
          className="absolute inset-0 h-full w-full object-cover rounded-4xl"
        />
      </div>
    </div>
  );
}
