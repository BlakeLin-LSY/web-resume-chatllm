"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function About() {
  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-6"
      >
        <User className="h-6 w-6 text-primary" />
        <h2 className="section-heading">About Me</h2>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-card shadow-md dark:shadow-black/30 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <p className="text-lg leading-relaxed">
            An engineer who tries to build the future with imagination and skills. I am eager to leverage my skills to build innovative software that positively impacts daily life. Software engineer specializing in computer vision and 3D metrology with a proven track record of developing and optimizing algorithms for industrial applications.
          </p>
        </div>
      </motion.div>
    </div>
  );
}