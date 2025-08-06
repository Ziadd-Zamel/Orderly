import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

export default function Home() {
  // Translation
  const t = useTranslations();

  return (
    <>
      <Navbar />
      <section className="box-container h-screen">
        <div className="flex gap-10">
          <div className="hero-content-box flex flex-col items-start gap-6">
            {/* Heading */}
            <h2 className="text-6xl font-poppins font-bold">{t("heroSection.heading")}</h2>

            {/* Hero Description */}
            <p className="">{t("heroSection.description")}</p>

            {/* Search Component */}
            <div className="w-full relative p-2 bg-main/40 flex gap-2 rounded-full">
              <Input
                className="bg-background border-none w-[70%]"
                placeholder={t("search-input-placeholder")}
              />
              <Button className="rounded-full w-[30%]">{t("search")}</Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
