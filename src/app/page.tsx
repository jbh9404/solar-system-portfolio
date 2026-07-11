"use client";

import dynamic from "next/dynamic";

const SolarSystem = dynamic(() => import("@/components/SolarSystem"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-black text-white">
      <div className="animate-pulse text-xl">Loading Universe...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="w-full h-screen bg-black">
      <SolarSystem />
    </main>
  );
}
