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
        <div>
          <h1 className="lg:text-[50px] my-4 font-semibold  text-[40px] text-color3 text-center">
            RafMovies
          </h1>
        </div>
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
              <SwiperSlide key={index} className="overflow-hidden border-none">
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
