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
        image: "https://ik.imagekit.io/72bccx2bu/ABHIPSHA.jpg",
        author: "Abhipsa",
        message: "SIT MUN✨was such an amazing experience for me.That was my first MUN. Meeting new people and communicating was one of the best part.I had got one of the best Committee DISEC.The country was Turkey. It was not just an amazing experience but I have also gained the confidence in public speaking and overcome my stage fear.Those three days were greatt!!",
    },
    {
        image: "https://ik.imagekit.io/72bccx2bu/SHREYA.jpg",
        author: "Shreya",
        message: "To the very first question, my experience in DISEC was quite memorable as I got a chance to go for single delegation and win as well. Secondly, this really made an impact on my life by not only boosting my confidence but also assuring me that I was good enough on my own. The most surprising moment was being recognized for high recommendation itself, well honestly I didn't expected that. Lastly, I would likely be suggesting people on a 10 on 10 rating to participate."
    },
    {
        image: "https://ik.imagekit.io/72bccx2bu/SANKALP.jpg",
        author: "Sankalp Chauhan",
        message: "SITMUN 2022 was the conference where I restarted my MUN journey after 2019 and since then there was no looking back. The conference gave me the opportunity to meet some of the best people not only from SIT but from universities across Odisha. There is no doubt that SIT hosts one of the best MUNs in the entire Easter Region and I am glad to be a part of such a superlative conference."
    },

    {
        image: "https://ik.imagekit.io/72bccx2bu/ABHIJET.jpg",
        author: "Abhijit",
        message: "SITMUN 2022 is one of the most wonderful event in my life that I have ever participated.This platform provided me the opportunity to meet and interact with new people outside my college. I am very thrilled to be the part of this event as it had helped me in developing new skills.I will highly recommend this event to everyone ,no matter whether he/she is a beginner or highly experienced as it is a perfect platform to recognize your true form."
    },
    {
        image: "https://ik.imagekit.io/72bccx2bu/AAYUSHEE.jpg",
        author: "Aayusee",
        message: "As a beginner my experience was really nice and quite memorable as well. I got to know about so many things which really helped me in improving my general knowledge. The research done by people .Of course I would recommend people to participate as it helped me in boosting my confidence. Cheers to SIT MUN⭐️"
    },
    {
        image: "https://ik.imagekit.io/72bccx2bu/LORIA.jpg",
        author: "Loria",
        message: " I attended MUN for the first time in 2022, and it been SITMUN. SITMUN gave me a lifetime experience and completely changed my ideology about MUNs and literary events on a broad scale. The thing that surprised me the most was , it was not as bad as I had imagined it to be . I regret not attending MUNs from early on , I feel sad about the number of experiences and the amount of information I have passed my chance on , I hope you all don't do the same !! All the best everyone and Happy Mun-ning!!."
    },

    {
        image: "https://ik.imagekit.io/72bccx2bu/SWASTI.jpg",
        author: "Swasti",
        message: "It was an absolute blast. As it was 1st MUN, I’m literally grateful for having such a cooperative and helpful committee and OC. It was my dream come true to attend a MUN and have been attending many MUNs since then.The politeness, support and help of the OC members did really touch my heart.Will surely recommend and motivate all my friends to attend it too."
    },



];

function Testimonials() {

    return (
        <div className="testimonial-section">
            <div><Heading head="What Participants said?" /></div>
            <div> <Container className="testimonials-container">

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
                        speed={1500}
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


            </Container></div>
        </div>
    );
}

export default Testimonials;
