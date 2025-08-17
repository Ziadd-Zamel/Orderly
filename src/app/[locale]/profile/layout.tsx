import Navbar from "@/components/layout/header";
import ProfileSidebar from "./_components/profile-sidebar";

export default async function LocaleLayout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex items-start gap-6 mt-32 mb-10 box-container">
        <ProfileSidebar />
        <section className="flex-1">{children}</section>
      </main>
    </>
  );
}
