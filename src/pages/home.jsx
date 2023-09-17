import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Story } from "../components";

export default function Home() {
  const settings = {
    showArrows: false,
    interval: 3500,
    dynamicHeight: false,
    stopOnHover: false,
    infiniteLoop: true,
    showStatus: false,
    transitionTime: 500,
    showThumbs: false,
    showIndicators: true,
    swipeable: true,
    emulateTouch: true,
    autoPlay: true,
  };
  const imgs = [
    {
      src: "https://static.wixstatic.com/media/0fe16d_443cb246a71f467c9d73e3f977d02df2~mv2.jpg/v1/fill/w_1280,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fe16d_443cb246a71f467c9d73e3f977d02df2~mv2.jpg",
      title: "Everest Maya Restaurant",
      desc: "Everest Maya is proud to bring you the taste of Himalayas, from the footsteps of Everest to food loving neighborhood of Firestone & Longmont Colorado. We are delighted to present you a unique combination of culinary mixtures that are tailored to your liking.",
    },
    {
      src: "https://static.wixstatic.com/media/0fe16d_6ac99da2e7cf446199706e4081e36c0e~mv2.jpeg/v1/fill/w_1280,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fe16d_6ac99da2e7cf446199706e4081e36c0e~mv2.jpeg",
      title: "The taste of Mt. Everest",
      desc: "From the doorsteps of Himalayas to the food-loving neighborhood of Firestone & Longmont neighborhood.",
    },
    {
      src: "https://static.wixstatic.com/media/0fe16d_566e059c9b88466b9add71e204bd7fb4~mv2.jpg/v1/fill/w_1280,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fe16d_566e059c9b88466b9add71e204bd7fb4~mv2.jpg",
      title: "Rice & Curry",
      desc: "We're Serious about Spices.",
    },
  ];

  return (
    <>
      <Carousel {...settings}>
        {imgs.map((item, index) => (
          <div
            key={index}
            className="relative"
            style={{
              width: "100%",
              height: "100vh",
            }}
          >
            <img
              alt={item.title}
              src={item.src}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-transparent p-2 w-[100%] md:w-[50%]">
              <p className="font-extrabold   text-[46px] left-0  mt-32 md:my-6 md:mt-20 ">
                {item.title}
              </p>
              {item.desc && (
                <span className=" left-0  text-[20px]">{item.desc}</span>
              )}
              <div className="flex flex-row justify-evenly rounded-sm m-16">
                <button className="bg-red-700 w-[200px] h-[50px] mx-2">
                  VIEW MENU
                </button>
                <button className="bg-red-700 w-[200px] h-[50px] mx-2">
                  ORDER ONLINE
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <Story />
    </>
  );
}
