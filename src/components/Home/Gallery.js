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
import Heading from "../common/heading";

import img1 from "../../img/DSC05014.JPG";
import img5 from "../../img/DSC_7073.JPG";
import img8 from "../../img/DSC_6969.JPG";
import img9 from "../../img/DSC05203.JPG";

const Gallery = () => {
  const galData = [
    {
      imgSrc: "https://ik.imagekit.io/lvjdjaus38/img1.jpg",
    },
    {
      imgSrc: "https://ik.imagekit.io/lvjdjaus38/img2.jpg",
    },
    {
      imgSrc: "https://ik.imagekit.io/lvjdjaus38/img3.jpg",
    },
    {
      imgSrc: "https://ik.imagekit.io/lvjdjaus38/img4.jpg",
    },
    {
      imgSrc: "https://ik.imagekit.io/lvjdjaus38/img5.JPG",
    },
    {
      imgSrc: "https://ik.imagekit.io/lvjdjaus38/img6.JPG",
    },
    {
      imgSrc: "https://ik.imagekit.io/lvjdjaus38/img7.JPG",
    },
    {
      imgSrc: "https://ik.imagekit.io/lvjdjaus38/img8.jpg",
    },
    {
      imgSrc: "https://ik.imagekit.io/lvjdjaus38/img9.jpg",
    },
    {
      imgSrc: "https://ik.imagekit.io/lvjdjaus38/img10.JPG",
    },
  ];
  return (
    <>
      <div className="media container" id="gallery">
        <Heading head="Gallery"></Heading>
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
          {galData.map((item, idx) => (
            <SwiperSlide className="g-slide" key={Math.random() * idx}>
              <img
                src={item.imgSrc}
                alt="sitmun-highlights"
                className="swiper-lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Gallery;
