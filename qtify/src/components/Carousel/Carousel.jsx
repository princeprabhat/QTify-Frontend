import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Cards from "../Cards/Cards";
import styles from "./Carousel.module.css";

const Carousel = ({ data }) => {
  const width = window.innerWidth;
  console.log(width);
  return (
    <div className={styles.carousel_container} style={{ height: "30vh" }}>
      {data.length && (
        <Swiper
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className={styles.swiper_container}
          spaceBetween={15} // Space between cards
          slidesPerView={1} // Initial view of cards
          breakpoints={{
            566: { slidesPerView: 3 }, // 1 card on small screens
            760: { slidesPerView: 4 }, // 2 cards on medium screens
            955: { slidesPerView: 5 }, // 3 cards on large screens
            1149: { slidesPerView: 6 },
            1344: { slidesPerView: 7 },
            1538: { slidesPerView: 8 },
            1733: { slidesPerView: 9 },
            1927: { slidesPerView: 10 },
            2122: { slidesPerView: 11 },
            2316: { slidesPerView: 12 },
          }}
        >
          {data.map((cardData) => {
            return (
              <SwiperSlide className={styles.swiper_slide}>
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
