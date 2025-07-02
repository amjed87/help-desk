"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Courses from "@/components/Home/Courses";
import Mentor from "@/components/Home/Mentor";
import Testimonial from "@/components/Home/Testimonials";
import Newsletter from "@/components/Home/Newsletter";
import Diracter from "@/components/Home/Diracter";

const AnimatedHome = () => {
  return (
    <main>
      <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Hero />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Diracter />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Mentor />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Newsletter />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Courses />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Companies />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Testimonial />
      </motion.div>
    </main>
  );
};

export default AnimatedHome;
