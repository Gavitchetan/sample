// components/About.tsx
"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-10"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg"
          >
            <p>
              I am a dedicated developer with a passion for creating web
              applications that are both functional and visually appealing. I
              specialize in front-end and back-end technologies, including
              JavaScript, React, Node.js, and Next.js.
            </p>
            <p className="mt-4">
              I love experimenting with new technologies and constantly
              improving my skills to deliver the best user experiences.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Image
              src="/profile-pic.jpg"
              width={50}
              height={50}
              alt="Profile"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
