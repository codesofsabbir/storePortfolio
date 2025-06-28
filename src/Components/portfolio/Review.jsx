"use client";
import React, { useEffect, useRef, useState } from "react";
import { GoStarFill } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import mehedi from "@/media/mehedi.jpg";
import imtiaz from "@/media/Imtiaz.jpg";
import inLtd from "@/media/in.jpg";
import sahariyar from "@/media/sahariyar.jpg";
import Image from "next/image";

const reviews = [
  {
    name: "Md Mehedi Hasan",
    title: "Game Developer",
    image: mehedi,
    message:
      "“Sabbir did a fantastic job customizing my Blogspot theme. He was quick to understand my vision and executed the changes with great precision. The layout looks clean and professional, and it has significantly improved the user experience on my blog. Highly recommended!”",
  },
  {
    name: "Imtiaz Ahmed",
    title: "Marketing Expert",
    image: imtiaz,
    message:
      "“I collaborated with Sabbir for a WordPress theme customization project, and I’m truly impressed with his professionalism. He delivered everything on time and went beyond expectations by optimizing the site’s speed and responsiveness. I’ll definitely work with him again.”",
  },
  {
    name: "Sahariyar Hasan",
    title: "Web Designer",
    image: sahariyar,
    message:
      "“I hired Sabbir to build a responsive landing page with multiple sections, and he nailed it. The design is sleek, and the animations are smooth. He was open to feedback and made all requested revisions promptly. Great experience!”",
  },
  {
    name: "IN Technology Ltd",
    title: "Information Technology Limited",
    image: inLtd,
    message:
      "“Sabbir delivered an outstanding WordPress website for our company. He managed the entire design and development process efficiently and communicated clearly throughout. The final result is user-friendly, modern, and perfectly aligned with our brand. We’re very satisfied with his work.”",
  },
];

function Review() {
  const swiperRef = useRef(null);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching doctors data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-lg font-semibold titleText mt-10 mb-10">
        Client Review
      </h2>
      <Swiper
        slidesPerView={2}
        slidesPerGroup={1}
        spaceBetween={20}
        speed={500}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000 }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoHeight={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        className=""
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="boxBg p-10 w-1/2 rounded-lg relative"
          >
            <div className="h-[200px]">
              <div className="flex gap-5">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={200}
                  height={200}
                  className="h-14 w-14 rounded-full"
                />
                <div className="leading-0 flex flex-col gap-1.5">
                  <h2 className="text-base titleText">{review.name}</h2>
                  <i className="text-[11px] activeText">{review.title}</i>
                </div>
              </div>
              <p className="text-justify mt-2 subTitleText text-xs">
                {review.description}
              </p>
              <div className="structureBg w-fit rounded-full mt-5 py-2 px-4 hidden md:flex gap-1 absolute bottom-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <GoStarFill key={i} className="activeText" />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between pt-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="activeText text-xl font-semibold cursor-pointer"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="activeText text-xl font-semibold cursor-pointer"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </>
  );
}

export default Review;
