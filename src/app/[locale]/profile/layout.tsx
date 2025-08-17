import Navbar from "@/components/layout/header";
import ProfileSidebar from "./_components/profile-sidebar";
import CornerVectors from "@/components/common/corner-vectors";

export default async function LocaleLayout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex items-start gap-6 mt-32 mb-10 box-container">
        <ProfileSidebar />
        <section className="relative z-20 flex-1">{children}</section>
      </main>
      <CornerVectors />
    </>
  );
}
