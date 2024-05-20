import { Inter } from "next/font/google";

import MainLayout from "@/components/core/layout/MainLayout";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "FU-DEVER",
  description:
    "Welcome to FU-DEVER, the programming club of FPT University! . At FU-DEVER, we strive to foster a vibrant community of aspiring programmers and provide a platform for skill development and collaboration.",
  icons: {
    icon: "/icons/layout/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
