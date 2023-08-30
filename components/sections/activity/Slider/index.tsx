import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import img3 from "@pageImage/activity/img3.png";
import ArrowImg from "@pageImage/activity/ArrowImg.svg";
interface ExtraActivity {
  img: string;
  alt: string;
}
function Slider() {
  const extraActivies: ExtraActivity[] = [
    {
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg",
      alt: "img",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70WgKN0lItPR2lfxTLxbIEQv9X2QuaFpFSG9Tqb_jww&s",
      alt: "img",
    },
    {
      img: "https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      alt: "img",
    },
    {
      img: "https://thumbs.dreamstime.com/b/two-hummingbird-bird-pink-flower-hummingbirds-fiery-throated-hummingbird-flying-next-to-beautiful-bloom-flower-savegre-co-95610310.jpg",
      alt: "img",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVH4td5yK_J3I8HD986yGhhDsk2rrnwUcPxye4QI-9z4fmBmDXVjRbTVlHlgQNH_YFDc&usqp=CAU",
      alt: "img",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYDQ6bZVzCwxR4vlDZjm-P7NNszby-vIn3japtt81kPKGDZ96yiBl-FdfHOLwPXaQeTJg&usqp=CAU",
      alt: "img",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoy_PaAPmEKRK_V6AIa3ucopcTzWY_bAa88A&usqp=CAU",
      alt: "img",
    },
    {
      img: "https://wallpapers.com/images/featured/beautiful-painting-31jw65zmfdepcygw.jpg",
      alt: "img",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMASWkcGJ0mrs_mPsde0thFAtmvfMyH0Tidg&usqp=CAU",
      alt: "img",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pkcNsYi13Myhj9l5SgjhLlYh9OIm_L9_1w&usqp=CAU",
      alt: "img",
    },
    {
      img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
      alt: "img",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV59vWRafpqhV8ScX0XuiDkHIU_AIJlTiVFg&usqp=CAU",
      alt: "img",
    },
  ];
  const maxVisibleImages = 4;
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [visibleImages, setVisibleImages] = useState<ExtraActivity[]>([]);

  useEffect(() => {
    const startIndex = selectedImageIndex % extraActivies.length;
    const endIndex = (startIndex + maxVisibleImages - 1) % extraActivies.length;
    const newVisibleImages = [];

    if (startIndex <= endIndex) {
      for (let i = startIndex; i <= endIndex; i++) {
        newVisibleImages.push(extraActivies[i]);
      }
    } else {
      for (let i = startIndex; i < extraActivies.length; i++) {
        newVisibleImages.push(extraActivies[i]);
      }
      for (let i = 0; i <= endIndex; i++) {
        newVisibleImages.push(extraActivies[i]);
      }
    }

    setVisibleImages(newVisibleImages);
  }, [selectedImageIndex, extraActivies]);

  const handleImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleNextImg = () => {
    setSelectedImageIndex((selectedImageIndex + 1) % extraActivies.length);
  };

  const handlePreviousImg = () => {
    setSelectedImageIndex(
      (selectedImageIndex - 1 + extraActivies.length) % extraActivies.length
    );
  };
  return (
    <>
      <div className="flex flex-col mt-[20px] w-full xl:px-[80px] md:px-[40px] sm:px-[20px]">
        <div className="mt-[20px] w-full max-w-[1280px]">
          <div className="flex justify-center">
            <div className="w-full  xl:h-[500px] lg:h-[400px] md:h-[300px] sm:h-[200px] relative ">
              <Image
                onClick={handlePreviousImg}
                className="absolute text-[#0098FF] rotate-180 left-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
                height={30}
                src={ArrowImg}
                alt="arrowIcon"
              />
              <Image
                className="w-full h-full object-cover"
                src={visibleImages[0]?.img}
                alt=""
              />
              <Image
                onClick={handleNextImg}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
                height={30}
                src={ArrowImg}
                alt="arrowIcon"
              />
            </div>
          </div>
          <div className="w-full mt-[10px] flex gap-[20px] items-center">
            <div className="w-full justify-between o  flex items-center">
              {visibleImages.map((img, index) => (
                <Image
                  //   className={
                  //     selectedImageIndex === index
                  //       ? "opacity-100 cursor-pointer md:w-[calc((100%-60px)/4)] sm:w-[calc((100%-30px)/4)]"
                  //       : "opacity-60 cursor-pointer md:w-[calc((100%-60px)/4)] sm:w-[calc((100%-30px)/4)]"
                  //   }
                  className="opacity-100 cursor-pointer md:w-[calc((100%-60px)/4)] sm:w-[calc((100%-30px)/4)]"
                  onClick={() => handleImage(index)}
                  key={index}
                  src={img.img}
                  alt={img.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
