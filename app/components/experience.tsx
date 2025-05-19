"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Study Group with Former LIPS Colleagues",
    period: "Jan 2021 - Present",
    description: [
      "Organized and participated in weekly paper or case study discussions",
      "Recent topics: CoT, 3D-Gaussian Splatting, LoRA, SORA, Mamba..."
    ]
  },
  {
    title: "Software Engineer @ MetGauge Co., Ltd.",
    period: "Sep 2023 - Aug 2024",
    description: [
      "Actively developed and tested a 3D measurement and calibration system for a 12-stereo camera setup using C++ and Python",
      "Developed an advanced measurement machine to replace human presence in high-risk factory zones, enhancing safety and efficiency"
    ]
  },
  {
    title: "Algorithm Engineer @ UTECHZONE Co., Ltd.",
    period: "June 2021 - March 2022",
    description: [
      "Developed Automated Optical Inspection algorithm using C#",
      "Conducted testing and optimization of the algorithm (40% time reduced)",
      "Mentored two new team members and worked closely with a team of over 10 individuals to achieve project goals"
    ]
  },
  {
    title: "Software Engineer @ LIPS Corporation",
    period: "July 2019 - April 2020",
    description: [
      "Developed 3D metrology algorithm using stereo camera using C++",
      "Conducted camera calibration of Intel RealSense D415 | D435",
      "Optimized real-time 3D metrology algorithm (66% accuracy improved)"
    ]
  },
  {
    title: "Research Assistant @ National Central University",
    period: "Sep 2018 - Jan 2019",
    description: [
      "Conducted single-cell experiments using high-speed cameras with dark-field microscopy",
      "Performed particle tracking on large datasets of microscopy images"
    ]
  }
];

export default function Experience() {
  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-6"
      >
        <Briefcase className="h-6 w-6 text-primary" />
        <h2 className="section-heading">Work Experience</h2>
      </motion.div>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="timeline-item"
          >
            <div className="bg-card shadow-md dark:shadow-black/30 rounded-lg p-6 hover:shadow-lg transition-all hover:scale-[1.01]">
              <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
              <div className="flex items-center gap-1 text-muted-foreground mb-4">
                <Calendar className="h-4 w-4" />
                <span>{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}