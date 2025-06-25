"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { eGov, giS, mtS, sysInfo } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<null | typeof eGov[0]>(null);

  const sections = [
    { title: "خدمات قسم الحكومة الإلكترونية", data: eGov },
    { title: "خدمات قسم النظم الجغرافية", data: giS },
    { title: "خدمات قسم النظم المعلوماتية", data: sysInfo },
    { title: "خدمات قسم صيانة الحاسبات والأجهزة الملحقة", data: mtS },
  ];

  return (
    <main dir="rtl" lang="ar" className="bg-white">
      <section className="container mx-auto max-w-screen-xl px-4 pb-20" id="courses">
        {/* ✅ العنوان الرئيسي */}
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-midnight_text mb-16 leading-relaxed">
          تسعى مديرية الاتصالات والنظم المعلوماتية لتقديم أفضل الخدمات وفق أفضل المعايير العالمية
        </h1>

        <div className="flex items-center justify-between pt-10 lg:pt-4 mb-8 flex-wrap gap-4">
          <div className="flex gap-2">
            <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} />
            <Link href="#">
              <p className="text-sm sm:text-lg font-normal text-black">مكتبة الفيديوهات التعليمية</p>
            </Link>
          </div>
          <div className="flex gap-2">
            <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} />
            <Link href="#">
              <p className="text-sm sm:text-lg font-normal text-black">تحميل البرامج والأنظمة</p>
            </Link>
          </div>
          <div className="flex gap-2">
            <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} />
            <a href="https://meet.erp.moi/help">
              <p className="text-sm sm:text-lg font-normal text-black">دعم فني مباشر</p>
            </a>
          </div>
          <div className="flex gap-2">
            <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} />
            <Link href="#">
              <h2>التبليغات</h2>
            </Link>
          </div>
        </div>

        <hr className="mb-10 border-t-2 border-primary w-full" />

        {/* ✅ عرض الأقسام */}
        {sections.map((section, idx) => (
          <div key={idx} className="mb-20">
            <h2 className="text-2xl font-bold text-black mb-8 text-right">{section.title}</h2>
            <hr className="mb-10 border-t-2 border-primary w-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.data.map((item, i) => (
                <div key={i} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col">
                  
                  {/* ✅ فيديو يظهر بحجم مناسب داخل البطاقة */}
                  <video
                    src={item.imgSrc}
                    className="w-full aspect-video object-contain"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />

                  <div className="px-4 pt-4 flex flex-col justify-between flex-1 pb-6">
                    <button
                      onClick={() => setSelectedService(item)}
                      className="text-2xl font-bold text-black line-clamp-2 leading-snug mt-2 text-right hover:text-primary"
                    >
                      {item.heading}
                    </button>
                    <p className="text-xl font-normal text-black/75 mt-4 line-clamp-4 leading-relaxed text-right text-justify">
                      {item.name}
                    </p>
                    <div className="mt-6 text-left">
                      <Link
                        href="/react-app/login"
                        className="inline-block bg-primary text-white hover:bg-primary/80 px-6 py-2 rounded-full text-sm font-semibold transition"
                      >
                        اطلب الخدمة الآن
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ✅ النافذة المنبثقة */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 relative shadow-lg">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl"
              aria-label="إغلاق"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-primary mb-4">{selectedService.heading}</h2>

            <video
              src={selectedService.imgSrc}
              className="w-full aspect-video object-contain rounded"
              muted
              autoPlay
              loop
              playsInline
            />

            <p className="mt-4 text-gray-800 leading-relaxed text-justify">
              {selectedService.name}
            </p>

            <div className="mt-6 text-center">
              <Link
                href="/react-app/login"
                className="inline-block bg-primary text-white hover:bg-primary/80 px-8 py-3 rounded-full text-base font-semibold transition"
              >
                اطلب الخدمة الآن
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ServicesPage;
