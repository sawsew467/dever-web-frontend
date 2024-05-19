import "./globals.css";
import { Inter } from "next/font/google";
import MainLayout from "@/components/core/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Câu lạc bộ lập trình FU-DEVER",
  description: "Dever is dever",
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
