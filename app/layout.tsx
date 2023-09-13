import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { AnimatePresence } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={inter.className} >
        <Header></Header>
          {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
