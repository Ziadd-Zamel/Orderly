import { Suspense } from "react";
import ProfileInfo from "./_components/profile-info";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileInfo />
    </Suspense>
  );
}
