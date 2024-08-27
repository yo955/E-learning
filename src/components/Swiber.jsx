// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/Swiper.css";
import img from "../images/profilePhoto.svg";
import { useEffect } from "react";
import { gsap } from "gsap";

const SwiperComponent = () => {
  useEffect(() => {
    // Animate Swiper slides using GSAP
    gsap.fromTo(
      ".swiper-slide",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }
    );
  }, []);

  return (
    <div className="main-swiper">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img} alt="Profile" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="Profile" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="Profile" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="Profile" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="Profile" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="Profile" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="Profile" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="Profile" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="Profile" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
