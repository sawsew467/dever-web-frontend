"use client";
import projectImage from "@images/pages/activity/img.png";
import Card from "./Card";
import ChangePage from "@/components/ChangePage";
import { useState } from "react";

import Card1 from "@images/pages/blogs/fakedata/card1.jpg";
import Card2 from "@images/pages/blogs/fakedata/card2.png";
import Card3 from "@images/pages/blogs/fakedata/card3.png";
import Card4 from "@images/pages/blogs/fakedata/card4.png";
import Card5 from "@images/pages/blogs/fakedata/card5.png";
import Card6 from "@images/pages/blogs/fakedata/card6.png";

interface pageProps {
  page: number;
  totalPages: number;
}

const initialListProjects = [{}, {}];

function List({ listProjects = initialListProjects }: any) {
  const [page, setPage] = useState<pageProps["page"]>(1);

  const getTotalPage = (value: string): number => {
    return 1;
  };

  const totalPages = getTotalPage("data");

  const onChangePage = (value: number): void => {
    setPage(value);
  };

  return (
    <div className="sm:space-y-[12px] md:space-y-[20px] xl:space-y-[24px] ">
      <div className="w-[100%] flex sm:flex-col md:flex-row sm:gap-y-[20px] md:gap-y-[12px] lg:gap-y-[20px] xl:gap-y-[32px] justify-between flex-wrap ">
        {listProjects?.map((items: any) => (
          <Card
            key={items?._id}
            _id={items?._id}
            category={items?.category}
            postTime={items?.createdAt}
            tiltle={items?.title}
            depcription={items?.subTitle}
            image={items?.image}
            slug={items?.slug}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default List;
