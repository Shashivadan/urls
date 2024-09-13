

import Profile from "@/components/profile";
import HyperLinks from "@/components/hyper-links";

export const dynamic = "force-static";
export default function Home() {
  return <>
    <div className="max-w-screen-md mx-auto p-6 h-[calc(100vh-72px)]" >
      <Profile/>
      <HyperLinks/>
    </div>
    </>;
}
