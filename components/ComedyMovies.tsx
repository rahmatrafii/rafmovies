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

import { ListMoviesComedy } from "@/constants/index";
const ComedyMovies = () => {
  const topFive = ListMoviesComedy.slice(0, 5);
  return (
    <section className="pt-10 ">
      <div className="container mx-auto px-4">
        <div>
          <div className="sm:text-xl md:text-2xl border-l-2 border-white pl-3 text-base  my-4 whitespace-nowrap text-white flex items-center justify-between">
            Comedy
            <Link href={"/movies/comedy"} className="text-xs text-color3 ">
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
              {topFive.map((movie: any, index: number) => (
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
export default ComedyMovies;
