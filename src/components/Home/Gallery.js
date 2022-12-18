import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/lazy";
import { Autoplay, Pagination, EffectCoverflow, Navigation } from "swiper";
import "../../css/gallery.css";

import img1 from "../../img/DSC05014.JPG";
import img5 from "../../img/DSC_7073.JPG";
import img8 from "../../img/DSC_6969.JPG";
import img9 from "../../img/DSC05203.JPG";

const Gallery = () => {
  return (
    <>
      <div className="media container">
        <h1>GALLERY</h1>
        <Swiper
          effect={"coverflow"}
          slidesPerView={"auto"}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }}
          loop={true}
          autoplay={{
            delay: 2400,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
          className="myGallerySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="sitmun-highlights" className="swiper-lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img5} alt="sitmun-highlights" className="swiper-lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img8} alt="sitmun-highlights" className="swiper-lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img9} alt="sitmun-highlights" className="swiper-lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img5} alt="sitmun-highlights" className="swiper-lazy" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Gallery;
