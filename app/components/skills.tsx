"use client";

import { motion } from "framer-motion";
import { Code, Brain, Cloud, Beaker } from "lucide-react";

const skills = {
  programmingLanguages: ["C++", "Python", "Kotlin", "Rust"],
  computerVision: [
    "Stereo camera",
    "3D metrology",
    "Algorithm development",
    "Image processing",
    "Object detection",
    "Segmentation"
  ],
  machineLearning: ["TensorFlow"],
  cloudComputing: ["Google Cloud"],
  other: ["Physics", "Biophysics", "Microscopy"]
};

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-6"
      >
        <Code className="h-6 w-6 text-primary" />
        <h2 className="section-heading">Skills</h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-card shadow-md dark:shadow-black/30 rounded-lg p-6 hover:shadow-lg transition-all hover:scale-[1.02]"
        >
          <div className="flex items-center gap-2 mb-4">
            <Code className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Programming Languages</h3>
          </div>
          <div className="flex flex-wrap">
            {skills.programmingLanguages.map((skill) => (
              <motion.span key={skill} variants={item} className="skill-tag">
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-card shadow-md dark:shadow-black/30 rounded-lg p-6 hover:shadow-lg transition-all hover:scale-[1.02]"
        >
          <div className="flex items-center gap-2 mb-4">
            <Brain className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Computer Vision</h3>
          </div>
          <div className="flex flex-wrap">
            {skills.computerVision.map((skill) => (
              <motion.span key={skill} variants={item} className="skill-tag">
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-card shadow-md dark:shadow-black/30 rounded-lg p-6 hover:shadow-lg transition-all hover:scale-[1.02]"
        >
          <div className="flex items-center gap-2 mb-4">
            <Brain className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Machine Learning</h3>
          </div>
          <div className="flex flex-wrap">
            {skills.machineLearning.map((skill) => (
              <motion.span key={skill} variants={item} className="skill-tag">
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-card shadow-md dark:shadow-black/30 rounded-lg p-6 hover:shadow-lg transition-all hover:scale-[1.02]"
        >
          <div className="flex items-center gap-2 mb-4">
            <Cloud className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Cloud Computing</h3>
          </div>
          <div className="flex flex-wrap">
            {skills.cloudComputing.map((skill) => (
              <motion.span key={skill} variants={item} className="skill-tag">
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-card shadow-md dark:shadow-black/30 rounded-lg p-6 hover:shadow-lg transition-all hover:scale-[1.02]"
        >
          <div className="flex items-center gap-2 mb-4">
            <Beaker className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Other Skills</h3>
          </div>
          <div className="flex flex-wrap">
            {skills.other.map((skill) => (
              <motion.span key={skill} variants={item} className="skill-tag">
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}