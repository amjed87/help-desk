"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { eGov, giS, mtS, sysInfo } from "@/app/api/data";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<null | typeof eGov[0]>(null);

  const sections = [
    { title: "خدمات قسم الحكومة الإلكترونية", data: eGov },
    { title: "خدمات قسم النظم الجغرافية", data: giS },
    { title: "خدمات قسم النظم المعلوماتية", data: sysInfo },
    { title: "خدمات قسم صيانة الحاسبات والأجهزة الملحقة", data: mtS },
  ];

  return (
    <main dir="rtl" lang="ar" className="bg-white pt-[120px]">
      <section className="container mx-auto max-w-screen-xl px-4 pb-20">
        {/* ✅ العنوان الرئيسي */}
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-midnight_text mb-16 leading-relaxed">
          تسعى مديرية الاتصالات والنظم المعلوماتية لتقديم أفضل الخدمات وفق أفضل المعايير العالمية
        </h1>

        {/* ✅ عرض الأقسام */}
        {sections.map((section, idx) => (
          <div key={idx} className="mb-20">
            {/* ✅ عنوان القسم */}
            <h2 className="text-2xl font-bold text-black mb-8 text-right">{section.title}</h2>

            {/* ✅ الخط الفاصل */}
            <hr className="mb-10 border-t-2 border-primary w-full" />

            {/* ✅ البطاقات */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.data.map((item, i) => (
                <div key={i} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col">
                  <Image
                    src={item.imgSrc}
                    alt={item.heading}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
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
                    {/* ✅ زر اطلب الخدمة الآن */}
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
            <Image
              src={selectedService.imgSrc}
              alt={selectedService.heading}
              width={500}
              height={250}
              className="w-full h-48 object-cover rounded"
            />
            <p className="mt-4 text-gray-800 leading-relaxed text-justify">
              {selectedService.name}
            </p>

            {/* ✅ زر اطلب الخدمة الآن داخل الـ Popup */}
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
