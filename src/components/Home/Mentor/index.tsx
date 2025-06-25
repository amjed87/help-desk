"use client";
import React from "react";
import Image from "next/image";
import { aboutdir } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const AboutdirMasg = () => {
  const director = aboutdir[0];

  return (
    <section className="bg-deepSlate py-16" id="mentor">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          
          {/* ✅ القسم النصي */}
          <div className="flex-1 text-right">
            <h2 className="text-3xl font-extrabold text-midnight_text mb-4">{director.heading}</h2>
            <h3 className="text-xl font-semibold text-darkbrown mb-6 justify-between">{director.name}</h3>
            <div className="space-y-4 text-lg leading-relaxed text-gray-800">
              <p>{director.sec1}</p>
              <p>{director.sec2}</p>
              <p>{director.sec3}</p>
              <p>{director.sec4}</p>
              <p>{director.sec5}</p>
            </div>
          </div>

          {/* ✅ صورة المدير */}
          <div className="flex-shrink-0">
            <Image
              src={director.imgSrc}
              alt={director.name}
              width={280}
              height={300}
              //className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutdirMasg;
