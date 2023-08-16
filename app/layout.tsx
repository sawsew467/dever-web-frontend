import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@components/Header";
import Footer from "@components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Câu lạc bộ lập trình FU-DEVER",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header></Header>
        {children}
        {/* <Footer></Footer> */}
      </body>
    </html>
  );
}
