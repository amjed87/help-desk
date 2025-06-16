"use client";

import React, { useState } from "react";
import Image from "next/image";
import { courseData } from "@/app/api/data";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<null | typeof courseData[0]>(null);

  return (
    <main dir="rtl" lang="ar" className="bg-white pt-[120px]"> {/* ✅ حل مشكلة اختفاء العنوان */}
      <section className="container mx-auto max-w-screen-xl px-4 pb-20">
        {/* ✅ العنوان الرئيسي */}
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-midnight_text mb-16 leading-relaxed">
          تسعى مديرية الاتصالات والنظم المعلوماتية لتقديم أفضل الخدمات وفق أفضل المعايير العالمية
        </h1>

        {/* ✅ شبكة الخدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseData.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition hover:shadow-2xl"
            >
              <Image
                src={service.imgSrc}
                alt={service.heading}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xl font-semibold text-primary hover:underline"
                >
                  {service.heading}
                </button>
                <p className="text-gray-700 mt-3 text-sm">{service.name}</p>
              </div>
            </div>
          ))}
        </div>
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
          </div>
        </div>
      )}
    </main>
  );
};

export default ServicesPage;
