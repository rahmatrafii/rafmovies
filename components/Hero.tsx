"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroImage from "./HeroImage";
const Hero = ({ movies }: any) => {
  const topFive = movies
    .filter((movie: any) => movie.backdrop_path !== null)
    .slice(0, 5);
  return (
    <section className="py-5">
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
            {topFive.map((movie: any, index: number) => (
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
