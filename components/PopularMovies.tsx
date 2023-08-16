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
import SlideMovies from "./SlideMovies";
const PopularMovies = ({ movies }: any) => {
  const topFive = movies
    .filter((movie: any) => movie.backdrop_path !== null)
    .slice(5, 10);
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
          <SlideMovies movies={topFive} />
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
