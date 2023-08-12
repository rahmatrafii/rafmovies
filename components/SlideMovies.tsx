"use client";
import React from "react";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
const SlideMovies = ({ actionMovies }: any) => {
  return (
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
        {actionMovies.map((movie: any, index: number) => (
          <SwiperSlide key={index}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};
export default SlideMovies;
