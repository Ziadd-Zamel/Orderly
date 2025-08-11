import Navbar from "@/components/layout/header";
import ProfileSidebar from "./_components/profile-sidebar";

export default async function LocaleLayout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="flex items-start gap-6 mt-32 box-container">
        <ProfileSidebar />
        {children}
      </div>
    </>
  );
}
