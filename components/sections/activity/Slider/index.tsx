import { useState } from "react";
import Image from "next/image";

interface ExtraActivity {
  img: string;
  alt: string;
}
function Slider() {
  const extraActivities: ExtraActivity[] = [
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
  const [indexStart, setIndexStart] = useState<number>(0);
  const [indexEnd, setIndexEnd] = useState<number>(maxVisibleImages - 1);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleImage = (index: number) => {
    setSelectedIndex(index);
    setIndexStart(index);
    setIndexEnd((index + maxVisibleImages - 1) % extraActivities.length);
  };

  const handleNextImg = () => {
    setIndexStart((indexStart + 1) % extraActivities.length);
    setIndexEnd((indexEnd + 1) % extraActivities.length);
  };

  const handlePreviousImg = () => {
    setIndexStart(
      (indexStart - 1 + extraActivities.length) % extraActivities.length
    );
    setIndexEnd(
      (indexEnd - 1 + extraActivities.length) % extraActivities.length
    );
  };
  return (
    <>
      <div className="flex flex-col mt-[20px] w-full ">
        <div className="mt-[20px] w-full max-w-[1280px]">
          <div className="flex justify-center">
            <div className="w-full  xl:h-[550px] lg:h-[450px] md:h-[350px] sm:h-[200px]  flex items-center justify-evenly  ">
              <svg
                onClick={handlePreviousImg}
                className=" cursor-pointer "
                height={80}
                width={80}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
                  style={{ transition: "fill 0.1s", fill: "#0098FF" }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "0.6")}
                />
              </svg>
              <img
                className="w-4/5 h-full object-cover"
                src={extraActivities[indexStart]?.img}
                alt={extraActivities[indexStart]?.alt}
              />
              <svg
                onClick={handleNextImg}
                className="rotate-180 cursor-pointer fill-red-800"
                height={80}
                width={80}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
                  style={{ transition: "fill 0.1s", fill: "#0098FF" }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "0.6")}
                />
              </svg>
            </div>
          </div>
          <div className="w-full mt-[20px] flex gap-[20px] items-center">
            <div className="w-full justify-between o  flex items-center">
              {extraActivities.map((img, index) => {
                if (
                  indexStart <= indexEnd
                    ? index >= indexStart && index <= indexEnd
                    : index >= indexStart || index <= indexEnd
                ) {
                  return (
                    <img
                      onClick={() => handleImage(index)}
                      className={`cursor-pointer ${
                        selectedIndex === index ? "blur-0" : "blur-[2px]"
                      } md:w-[calc((100%-60px)/4)] sm:w-[calc((100%-30px)/4)] max-h-[200px] h-full object-cover`}
                      key={index}
                      src={img.img}
                      alt={img.alt}
                    />
                  );
                }
                return null; // Don't render if index is outside the range
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
