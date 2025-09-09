import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UrbanLodge – Home page",
  description:
    "UrbanLodge helps you rent, buy, and finance properties with ease. Discover verified listings, explore neighborhoods, and access flexible mortgage and installment plans—all in one secure platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
