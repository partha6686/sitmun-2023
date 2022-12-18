import React from "react";
import { Container, Card } from "react-bootstrap";
import "../../css/testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import Heading from "../common/heading";

const tdata = [
    {
        image: "https://ik.imagekit.io/wgmrzbaty/g1.webp",
        author: "Hello World",
        message: "  Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice."
    },
    {
        image: "https://ik.imagekit.io/wgmrzbaty/g1.webp",
        author: "HelloWorld",
        message: "  Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice."
    },
    {
        image: "https://ik.imagekit.io/wgmrzbaty/g1.webp",
        author: "HelloWorld",
        message: "  Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice."
    },


];

function Testimonials() {

    return (
        <div className="testimonial-section">
            <Heading head='Testimonials' />
            <Container>

                <div className="testimonials-swiper-container">
                    <Swiper
                        breakpoints={{
                            250: {
                                slidesPerView: 1.15,
                                spaceBetween: 40,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 80,

                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 110,
                            },
                        }}


                        loop={true}
                        navigation={false}
                        effect={"coverflow"}
                        spaceBetween={30}
                        freeMode={true}
                        followFinger={true}
                        centeredSlides={true}
                        speed={1200}
                        pagination={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        grabCursor={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        modules={[Autoplay, EffectCoverflow, Navigation]}
                        className="mySwiper"
                    >

                        {tdata.map((item, key) => (
                            <SwiperSlide>
                                <figure class="snip1157">
                                    <blockquote class='d'>{item.message}
                                        <div class="arrow"></div>
                                    </blockquote>
                                    <img src={item.image} alt="sq-sample3" />
                                    <div class="author">
                                        <h5>{item.author}</h5>
                                    </div>
                                </figure>
                            </SwiperSlide>
                        ))}

                    </Swiper>



                </div>


            </Container>
        </div>
    );
}

export default Testimonials;
