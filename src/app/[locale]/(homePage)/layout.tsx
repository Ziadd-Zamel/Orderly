import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ThemeSwitcher from "@/components/custom/theme-switcher";
export default async function LocaleLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden ">
      <Navbar />
      <div className="flex-1">{children}</div>
      <ThemeSwitcher />
      <Footer />
    </div>
  );
}
