"use client";

import React from "react";
import Image from "next/image";
import { aboutAS } from "@/app/api/data";

const DirectorMessage = () => {
  const director = aboutAS[0]; // استخدام أول عنصر من البيانات

  return (
    <main dir="rtl" lang="ar" className="bg-white" >
      <section className="container mx-auto max-w-screen-xl px-4" id = "dir">
        {/* ✅ عنوان الصفحة */}
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-midnight_text mb-16 leading-relaxed">
          كلمة المدير العام
        </h1>

        {/* ✅ محتوى كلمة المدير */}
        <div className="flex flex-col lg:flex-row items-center gap-10 bg-white p-8 shadow-lg rounded-xl">
          {/* ✅ النص */}
          <div className="flex-1 text-right">
            <h2 className="text-2xl font-bold text-black mb-4">{director.heading}</h2>
            <p className="text-gray-800 leading-relaxed text-justify">{director.name}</p>
          </div>

          {/* ✅ الصورة */}
          <div className="flex-shrink-0">
            <Image
              src={director.imgSrc}
              alt={director.heading}
              width={600}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default DirectorMessage;
