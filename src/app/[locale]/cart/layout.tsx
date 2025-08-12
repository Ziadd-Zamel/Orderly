import Navbar from "@/components/layout/header";

export default async function LocaleLayout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
