"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "@/app/page.css";

function Slider({ images }: any) {
  const newImages = images?.map((image: any) => ({
    original: image?.url,
    thumbnail: image?.url,
    alt: image?.createdAt,
  }));
  console.log("first", newImages);
  return (
    <>
      <div className="flex flex-col mt-[20px] h-full w-full ">
        <div className="w-full max-w-[1280px]">
          <div className="flex justify-center">
            <div className="w-full  ">
              <ImageGallery
                lazyLoad={true}
                items={newImages}
                autoPlay
              ></ImageGallery>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
