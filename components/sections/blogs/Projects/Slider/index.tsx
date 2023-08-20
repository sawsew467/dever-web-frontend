'use client';
import React, { useState } from 'react';
import SliderItem from './SliderItem';

export interface PostProps {
  category: string;
  postTime: string;
  title: string;
  description: string;
  currPage: number;
  handlePageChange :(page:number) => void; 
}

function Slider() {
  const initialItems: PostProps[] = [
    {
      category: 'java',
      postTime: '5 month ago',
      title: 'Java backend 1',
      description: 'Description 1',
      currPage: 1,
      handlePageChange: () => {}
    },
    {
      category: 'python',
      postTime: '3 month ago',
      title: 'Python backend 2',
      description: 'Description 2',
      currPage: 2,
      handlePageChange: () => {}
    },
    {
      category: 'javascript',
      postTime: '2 month ago',
      title: 'JavaScript frontend 3',
      description: 'Description 3',
      currPage: 3,
      handlePageChange: () => {}
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const onChangePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="slider-container">
        <SliderItem
          category={initialItems[currentPage - 1].category}
          postTime={initialItems[currentPage - 1].postTime}
          title={initialItems[currentPage - 1].title}
          description={initialItems[currentPage - 1].description}
          currPage={initialItems[currentPage - 1].currPage}
          handlePageChange = {onChangePage}
        />
      </div>
    </div>
  );
}

export default Slider;
