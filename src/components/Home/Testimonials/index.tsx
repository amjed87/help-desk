"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Image from "next/image";
import { TestimonialData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Testimonial = () => {
  const [selected, setSelected] = useState<null | typeof TestimonialData[0]>(null);

  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1, dots: false } },
      { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 1, dots: false } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false } },
    ],
  };

  return (
    <section id="testimonial" dir="rtl" lang="ar">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <Slider {...settings}>
          {TestimonialData.map((items, i) => (
            <div key={i}>
              <div
                className={`bg-white rounded-2xl m-4 p-5 my-20 relative ${
                  i % 2 ? "shadow-testimonial-shadow2" : "shadow-testimonial-shadow1"
                }`}
              >
                {/* الصورة */}
                <div className="absolute top-[-85px]">
                  <Image
                    src={`${getImagePrefix()}${items.imgSrc}`}
                    alt={items.name}
                    width={150}
                    height={150}
                    className="inline-block"
                  />
                </div>

                {/* المحتوى */}
                <div className="mt-20">
                  <h4 className="text-xl font-normal text-darkgray text-justify my-6 line-clamp-4">
                    {items.comment}
                  </h4>
                  <button
                    onClick={() => setSelected(items)}
                    className="text-primary hover:underline text-sm"
                  >
                    ... المزيد
                  </button>
                </div>

                {/* معلومات الشخص */}
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <h3 className="text-xl font-bold text-darkbrown pt-4 pb-2">{items.name}</h3>
                    <h3 className="text-xl font-bold text-lightgray pb-2">{items.profession}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* ✅ النافذة المنبثقة */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-xl w-full p-6 relative shadow-lg">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-primary mb-4">{selected.name}</h2>
            <p className="text-gray-800 leading-relaxed text-justify">{selected.comment}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonial;
