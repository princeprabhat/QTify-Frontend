import React from "react";
import { ReactComponent as RightIcon } from "../../../assets/right-icon.svg";
import { ReactComponent as LeftIcon } from "../../../assets/left-icon.svg";
import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const swiper = useSwiper();
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);
  console.log("isLast", isLast);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsLast(swiper.isEnd);
      setIsFirst(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <div>
      {!isFirst && <LeftIcon className={styles.left_button} onClick={() => swiper.slidePrev()} />}
      {!isLast && <RightIcon className={styles.right_button} onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default Navigation;
