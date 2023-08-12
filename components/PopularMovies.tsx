"use client";
import Link from "next/link";
import React from "react";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
const PopularMovies = ({ movies }: any) => {
  let popularMovies = [];
  for (let index = 0; index < 5; index++) {
    popularMovies.push(movies[index]);
  }
  return (
    <section className="pt-10 ">
      <div className="container mx-auto px-4">
        <div>
          <div className="sm:text-xl md:text-2xl border-l-2 border-white pl-3  text-base  my-4 whitespace-nowrap text-white flex items-center justify-between">
            Popular Movies
            <Link href={"/movies"} className="text-xs text-color3 ">
              Show All
            </Link>
          </div>
        </div>
        <div>
          <Swiper
            slidesPerView={3}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              940: {
                slidesPerView: 4,
                slidesPerGroup: 2,
              },
              1104: {
                slidesPerView: 5,
                slidesPerGroup: 2,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
          >
            <div className="Swiper p-9">
              {popularMovies.map((movie, index) => (
                <SwiperSlide key={index}>
                  <MovieCard movie={movie} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default PopularMovies;
{
  /* <Swiper
  slidesPerView={1}
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
  className="mySwiper rounded-lg overflow-hidden"
>
  <SwiperSlide>
    <img src="/img/satu.webp" alt="" className="w-full" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="/img/dua.webp" alt="" className="w-full" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="/img/tiga.webp" alt="" className="w-full" />
  </SwiperSlide>
</Swiper>; */
}
