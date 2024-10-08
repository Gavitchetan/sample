"use client"
// components/Hero.tsx
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hello, I'm chetan
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          A passionate web developer with experience in modern web technologies.
        </p>
        <motion.p
          whileHover={{ scale: 1.1 }}
          className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-lg transition duration-300"
        >
          Learn More
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
