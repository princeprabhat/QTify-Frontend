import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Cards from "../Cards/Cards";

const Carousel = ({ data }) => {
  return (
    <div style={{ background: "white", height: "30vh" }}>
      {data.length && (
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((cardData) => {
            return (
              <SwiperSlide>
                <Cards data={cardData} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default Carousel;
