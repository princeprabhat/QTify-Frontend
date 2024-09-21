import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Cards from "../Cards/Cards";
import styles from "./Carousel.module.css";
import { breakPoints } from "../../utils/data";

import Navigation from "./Navigation/Navigation";

import "swiper/css";
import "swiper/css/navigation";

const Carousel = ({ data }) => {
  return (
    <div className={styles.carousel_container}>
      {data.length && (
        <Swiper
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          // className={styles.swiper_container}
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={breakPoints}
        >
          <Navigation />
          {data.map((cardData) => {
            return (
              <SwiperSlide className={styles.swiper_slide} key={cardData.id}>
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
