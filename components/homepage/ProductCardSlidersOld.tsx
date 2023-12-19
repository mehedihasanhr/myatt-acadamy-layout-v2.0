"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Virtual } from "swiper/modules";
import ProductCard from "./ProductCard";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { data } from "@/constants/data";
import _ from "lodash";
import React from "react";

const breakpoints = {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },

  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1536: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};

type Courses = (typeof data.courses)[0];

export default function ProductCardSliders() {
  return (
    <Box px={4}>
      <Swiper
        spaceBetween={40}
        slidesPerView={4}
        grabCursor={true}
        mousewheel={true}
        modules={[Mousewheel]}
        breakpoints={breakpoints}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {_.map(data.courses, (courses: Courses, index: number) => (
          <SwiperSlide key={index}>
            <ProductCard
              id={courses.id}
              title={courses.shift_title}
              image={courses.thumbnail}
              enrollHereUrl={courses.enrollHereUrl}
              readMoreUrl={courses.readMoreUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
