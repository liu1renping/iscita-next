import { Metadata } from "next";

import AboutUs from "@/app/about-us/AboutUs";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our organisation and our sponsored conferences.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutPage() {
  return (
    <main className="main-page">
      <h1 className="page-title">About Us</h1>
      <AboutUs />
    </main>
  );
}
