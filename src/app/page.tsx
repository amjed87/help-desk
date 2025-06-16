import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Courses from "@/components/Home/Courses";
import Mentor from "@/components/Home/Mentor";
import Testimonial from "@/components/Home/Testimonials";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "منصة الدعم الفني لمديرية ",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Courses />
      <Newsletter />
      <Companies />
      <Mentor />
      <Testimonial />
    </main>
  );
}