"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Suspense } from "react";
import { NavigationEvents } from "@/components/NavigationEvent";
import { Helmet } from "react-helmet";

const inter = Inter({ subsets: ["latin"] });
// export const metadata = {
//   title: "Câu lạc bộ lập trình FU-DEVER",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Helmet>
          <title>Câu lạc bộ lập trình FU-DEVER</title>
          <meta name="description" content="Generated by create next app" />
        </Helmet>
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
