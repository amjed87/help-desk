"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { courseData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Courses = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section id="courses" dir="rtl" lang="ar">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="sm:flex justify-between items-center mb-20">
          <h2 className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-5 sm:mb-0">
            اقسام المديرية .
          </h2>
          <Link
            href={"/"}
            className="text-primary text-lg font-medium hover:tracking-widest duration-500"
          >
            اطلع على كل الاقسام&nbsp;&gt;&nbsp;
          </Link>
        </div>

        {/* ✅ سلايدر + الأزرار الجانبية */}
        <div className="relative">
          {/* زر التالي */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-white border border-gray-300 hover:bg-primary hover:text-white p-3 rounded-full shadow transition"
            aria-label="التالي"
          >
            <Icon icon="ic:round-arrow-forward" className="text-xl" />
          </button>

          {/* زر السابق */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-white border border-gray-300 hover:bg-primary hover:text-white p-3 rounded-full shadow transition"
            aria-label="السابق"
          >
            <Icon icon="ic:round-arrow-back" className="text-xl" />
          </button>

          <Slider {...settings} ref={sliderRef}>
            {courseData.map((items, i) => (
              <div key={i}>
                <div className="bg-white m-3 mb-12 px-3 pt-3 pb-6 shadow-course-shadow rounded-2xl min-h-[480px] lg:min-h-[520px] flex flex-col justify-between">
                  {/* ✅ الصورة */}
                  <div className="relative rounded-3xl overflow-hidden">
                    <Image
                      src={`${items.imgSrc}`}
                      alt="course-image"
                      width={389}
                      height={200}
                      className="object-cover w-full h-[200px]"
                    />
                  </div>

                  {/* ✅ المحتوى */}
                  <div className="px-3 pt-4 flex flex-col justify-between flex-1">
                    <Link
                      href="#"
                      className="text-2xl font-bold text-black line-clamp-2 leading-snug mt-2"
                    >
                      {items.heading}
                    </Link>

                    <h3 className="text-base font-normal text-black/75 mt-6 line-clamp-2 leading-relaxed">
                      {items.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Courses;