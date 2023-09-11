import { useState } from "react";
import Image from "next/image";

interface ExtraActivity {
  img: string;
  alt: string;
}
function Slider() {
  const extraActivities: ExtraActivity[] = [
    {
      img: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/349050689_953975449058653_489753596979940785_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=49d041&_nc_ohc=xTrZpaL-1G0AX-vDIsA&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBMOAFQduOwAFPuF1VTE2jKuDrKzXzDx0zLycOqRi-Rzw&oe=64FE127A",
      alt: "img",
    },
    {
      img: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/349054842_214719474684619_8552380635753328268_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=Gir-YbjKfrYAX_-8RJw&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCYsQXgELTGYCNIOqjJl_N9yC0oGRPohYmhpQbLbXpmnQ&oe=64FE4DDC",
      alt: "img",
    },
    {
      img: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/338861507_243695788017140_906781670802621311_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=9n7C2Ya_TUsAX-mcRgY&_nc_oc=AQnlSDLroX51VhK7DlFG-u_lVOH2IkFBirrqZCPvaFgER5J0U4Im5TjGxECxSDhPtoiTVX4GIykv_jB4AMHa89zi&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfD69Ghl01UEgvmGwKGObQhTOWqebCPgMaaGWAnj3F3raw&oe=64FE3824",
      alt: "img",
    },
    {
      img: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/338865895_3532348523756010_9051564565765525231_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_ohc=sYw3WZDSGXwAX-lfUi8&_nc_oc=AQmlNgxnJZuzyetDeL_P7DcjpDsGPr6RuGlTEL4O2uSqJ5aSyAecWXc-b8wvM-EPR0EHZcBHDdS6uJABc1b97fxM&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfA8KvGUw9Deklvzu8RzHLps0vvw9TyPGc6ky-6fTseFVg&oe=64FE3E9B",
      alt: "img",
    },
    {
      img: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/338827797_922595032123733_5176784466139281130_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=49d041&_nc_ohc=3SzKSIhEsoIAX-29BIQ&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfB_9BKqfIQf1WJVqCI3clftuB6uMFlFNsqdVmq-clXujQ&oe=64FF6559",
      alt: "img",
    },
    {
      img: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/338937141_247877991011574_5482980115593587490_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=MyCS4okn2dEAX9pM0ge&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfAJOR4cGc_pHds4N89z-XLg64FG0w8FLoVFlKX1iHQuhQ&oe=64FFA029",
      alt: "img",
    },
    {
      img: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/339031288_744871543974045_97018292859331667_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_ohc=hFAo2ngZF2AAX9VfC0j&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfDy3rNX8waQs-Er9Z6PrF-FapjWtqPTogUceBW8rw6Syg&oe=64FE3FAE",
      alt: "img",
    },
    {
      img: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/338587375_179049917855651_3139915445004340605_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_ohc=R14-tgtsyRcAX_O-14u&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfAh-_mKG9AtKJz0NOz_opQMntKrcTa0obMgtO3g1saLsw&oe=64FF39C3",
      alt: "img",
    },
    {
      img: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/338707645_1235965160353007_8437435302741970211_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=TYOh4EH9tV0AX9EcAQh&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDDzwJwnPvzE71YRFJmEOR3gaDegDyDXEW3c4UOn98_kA&oe=64FFACCF",
      alt: "img",
    },
    {
      img: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/338928837_907931357095705_5497796432846645343_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=LuT6T4inWXUAX-PiI1F&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBY6RQXo3Hy-mp_gVTbAPi11vbxUCUvAGscJjZaAMIhEg&oe=64FF45EC",
      alt: "img",
    },
    {
      img: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/339130867_3579406705612877_7161432628448574231_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_ohc=zZ9faTGFSscAX9-5Hi5&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfARrruLu7GoFDwUoLDMWFrSYpG_oO0aBmHwGtcbQ3SXLg&oe=64FEA1DA",
      alt: "img",
    },
    {
      img: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/339277047_3147849108840632_2716527022012185335_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_ohc=OVmkpaBbnYUAX8SmKkG&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfBW1qBop-Y_x2hhgIXpIjIBuTMv6UsjKyWMunz9TJHgbg&oe=64FE263D",
      alt: "img",
    },
    {
      img: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/338927024_3499335590286414_3718941471594868781_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_ohc=-EcD6KKv7JwAX_Jzaos&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfAByyvXpj7kHak0_rh7lasmSWEL6E7avZroQI6Ujv-n_A&oe=64FDFF2C",
      alt: "img",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleImage = (index: number) => {
    setSelectedIndex(index);
  };

  const handleNextImg = () => {
    setSelectedIndex((selectedIndex + 1) % extraActivities.length);
  };

  const handlePreviousImg = () => {
    setSelectedIndex(
      (selectedIndex - 1 + extraActivities.length) % extraActivities.length
    );
  };
  return (
    <>
      <div className="flex flex-col mt-[20px] w-full ">
        <div className="w-full max-w-[1280px]">
          <div className="flex justify-center">
            <div className="w-full xl:h-[550px] lg:h-[450px] md:h-[350px] sm:h-[200px]  flex items-center justify-evenly  ">
              <div className="h-full w-1/6 flex justify-center items-center">
                <svg
                  onClick={handlePreviousImg}
                  className=" cursor-pointer "
                  height={80}
                  width={80}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transition: "fill 0.1s", fill: "#0098FF" }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "0.6")}
                >
                  <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" />
                </svg>
              </div>
              {/* <img
                className="w-4/5 h-full object-cover"
                src={extraActivities[selectedIndex]?.img}
                alt={extraActivities[selectedIndex]?.alt}
              /> */}
              <div className="w-4/6 h-full relative overflow-hidden ">
                <div className="absolute flex w-full h-full  ">
                  {extraActivities.map((image, index) => (
                    <img
                      key={index}
                      className="w-full h-full object-cover"
                      src={image.img}
                      alt={image.alt}
                    />
                  ))}
                </div>
              </div>
              <div className="h-full w-1/6 justify-center flex items-center">
                {" "}
                <svg
                  onClick={handleNextImg}
                  className=" rotate-180 cursor-pointer "
                  height={80}
                  width={80}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transition: "fill 0.1s", fill: "#0098FF" }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "0.6")}
                >
                  <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" />
                </svg>{" "}
              </div>
            </div>
          </div>
          <div className="w-full mt-[20px] flex gap-[20px] items-center">
            <div className="w-full justify-between flex items-center">
              {extraActivities.map((image, index) => {
                const isSelected = index === selectedIndex;
                const isInRange =
                  index >= selectedIndex - 1 && index <= selectedIndex + 2;
                const shouldBeDisplay =
                  isSelected ||
                  isInRange ||
                  (selectedIndex === 0 &&
                    index >= selectedIndex &&
                    index <= selectedIndex + 3) ||
                  (selectedIndex === extraActivities.length - 2 &&
                    index >= selectedIndex - 2 &&
                    index <= selectedIndex) ||
                  (selectedIndex === extraActivities.length - 1 &&
                    index >= selectedIndex - 3 &&
                    index <= selectedIndex);
                if (shouldBeDisplay) {
                  return (
                    <img
                      onClick={() => handleImage(index)}
                      className={`cursor-pointer ${
                        isSelected ? "blur-0" : "blur-[2px]"
                      } md:w-[calc((100%-60px)/4)] sm:w-[calc((100%-30px)/4)] max-h-[200px] h-full object-cover`}
                      key={index}
                      src={image.img}
                      alt={image.alt}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
