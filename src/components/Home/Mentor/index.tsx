"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { aboutdir } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const AboutdirMasg = () => {
   const director = aboutdir[0];


    return (
        <section className="bg-deepSlate" id="mentor" >
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative'>
                <div className="flex flex-col lg:flex-row items-center gap-10 bg-white p-8 shadow-lg rounded-xl">
               <div className="flex-1 text-right">
                        <h1 className="text-2xl font-bold text-black mb-4">{director.heading}</h1>
                        <h2 className="text-2xl text-black mb-4 text-justify">{director.name}</h2>
                        <p className="text-gray-800 leading-relaxed text-justify">{director.sec1}</p>
                        <p className="text-gray-800 leading-relaxed text-justify">{director.sec2}</p>
                        <p className="text-gray-800 leading-relaxed text-justify">{director.sec3}</p>
                        <p className="text-gray-800 leading-relaxed text-justify">{director.sec4}</p>
                        <p className="text-gray-800 leading-relaxed text-justify">{director.sec5}</p>
                      </div>
            
                      {/* ✅ الصورة */}
                      <div className="flex-shrink-0">
                        <Image
                          src={director.imgSrc}
                          alt={director.heading}
                          width={300}
                          height={250}
                          className="rounded-lg object-cover"
                        />
                      </div>
            </div>
          </div>
        </section>
    );
}

export default AboutdirMasg