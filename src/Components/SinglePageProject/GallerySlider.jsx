import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";

import "swiper/css";
import "swiper/css/pagination";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function GallerySlider({ images }) {
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
    NativeFancybox.bind('[data-fancybox="gallery"]', {
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionEffect: "slide",
      transitionDuration: 600,
      Toolbar: {
        display: ["zoom", "share", "slideshow", "thumbs", "close"],
      },
      Thumbs: {
        autoStart: true,
      },
      Hash: false,
    });

    return () => {
      NativeFancybox.unbind('[data-fancybox="gallery"]');
    };
  }, []);

  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".custom-swiper-pagination",
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
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
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <a
              data-fancybox="gallery"
              href={image}
              className="art-a art-portfolio-item-frame art-horizontal"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={1000}
                height={500}
                className="w-full object-cover"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-swiper-pagination flex items-center mt-4" />
    </div>
  );
}

export default GallerySlider;
