import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ThemeSwitcher from "@/components/custom/theme-switcher";

export default async function LocaleLayout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <div className="flex-1">{children}</div>
      <ThemeSwitcher />
      <Footer />
    </div>
  );
}
