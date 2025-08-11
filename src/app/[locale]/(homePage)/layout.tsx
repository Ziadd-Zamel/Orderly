import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
export default async function LocaleLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
