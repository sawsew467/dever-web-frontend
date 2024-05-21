import { Metadata } from "next";

import Banner from "@/components/sections/home/Banner";
import Product from "@/components/sections/home/Product";
import Introduction from "@/components/sections/home/Introduction";
import Join from "@/components/sections/home/Join";

export const metadata: Metadata = {
  title: "FU-DEVER | Home page",
  description:
    "Welcome to FU-DEVER, the programming club of FPT University! . At FU-DEVER, we strive to foster a vibrant community of aspiring programmers and provide a platform for skill development and collaboration.",
  icons: {
    icon: "/icons/layout/logo.png",
  },
  openGraph: {
    images: ["/images/meta.jpg"],
    title: "FU-DEVER | Câu lạc bộ lập trình FU-DEVER",
    description:
      "Welcome to FU-DEVER, the programming club of FPT University! . At FU-DEVER, we strive to foster a vibrant community of aspiring programmers and provide a platform for skill development and collaboration.",
  },
};

export default function Home() {
  return (
    <>
      <Banner />
      <Introduction />
      <Product />
      <Join />
    </>
  );
}
