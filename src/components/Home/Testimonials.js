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
        image: "https://ik.imagekit.io/72bccx2bu/Astha_kar.jpeg",
        author: "Astha Kar",
        message: "SITMUN2021 was a memorable experience. I represented Russia in UNHRC and it was an amazing committee, full ofenthusiasm. One of the most remarkable things was the Executive Board, they were so good in their job which kept all of us focused and engaged through all 3 days. The socials were pretty cool, all thanks to the OC.",
    },
    // {
    //     image: "https://ik.imagekit.io/72bccx2bu/Savyasachi.jpeg",
    //     author: "Savyasachi Mitra",
    //     message: "Last year I was fortunate enough to participate in the SITMUN 2022 as a photographer for the IP team .It was a really fantastic experience as on field there is so much going on in terms of emotions , debate and commute."
    // },
    {
        image: "https://ik.imagekit.io/72bccx2bu/Amruta.jpeg",
        author: "Amruta Ray",
        message: "I joined my first MUN as the delegate of Denmark in SITMUN.I was in the DISEC commitee. SITMUN is the best platform to participate and give urself a chance to share your point of views on delegate affairs and public relations . I personally recommend all the freshers to participate atleast once and urself a beautiful experience to explore the SITMUN."
    },

    {
        image: "https://ik.imagekit.io/72bccx2bu/Sreelaxmi.jpeg",
        author: "Sreelaxmi Sukhari",
        message: "Being a first timer I was hesitating a lot in the beginning and had many doubts. But starting from the first day itself I enjoyed the process of learning. It's a great platform,starting from debating to developing diplomacy. Many soft skills also develop in this whole process. It was a great experience for me. I believe for a college student - MUN is a ’MUST to have’ experience."
    },



];

function Testimonials() {

    return (
        <div className="testimonial-section">
            <Heading head="What Participants said?" />
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
                            <SwiperSlide className="t-slide">
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
