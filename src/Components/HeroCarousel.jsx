import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import cc from "../assets/cc.webp";
import cc3 from "../assets/cc2.jpg";
import cc4 from "../assets/Carousal2.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      slidesPerView={1}
      loop={true}
      effect="fade"
      autoplay={{ delay: 3500 }}
      pagination={{ clickable: true }}
      navigation={true}
      className="hero-swiper"
      >

       <SwiperSlide>
        <div className="sloganDiv">

            <div className="sloganGreen">
                <h1 id="head">Silicon Vista</h1>
                <p id="slogan">Online VLSI Training Institute</p>
            </div>

            <div className="sloganImage"></div>

        </div>
       </SwiperSlide>

    <SwiperSlide>
        <div className="swiper-slide1">
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper-slide2">
          <p>Advance Your <b>VLSI Career</b> with <br /> 
            <b>Industry Leading Online Training</b></p>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroCarousel
