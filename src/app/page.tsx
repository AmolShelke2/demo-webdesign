"use client";

import Information from "@/components/Information";
import InformationCards from "@/components/InformationCards";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Information />
      <InformationCards />
    </main>
  );
}
