"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroImage from "./HeroImage";
const Hero = ({ movies }: any) => {
  let heroMovies = [];
  for (let index = 5; index < 10; index++) {
    heroMovies.push(movies[index]);
  }
  return (
    <section className=" pt-4">
      <div className="container mx-auto px-4">
        <div className=" flex">
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper  "
          >
            {heroMovies.map((movie, index) => (
              <SwiperSlide key={index}>
                <HeroImage movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Hero;
