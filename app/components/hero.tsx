"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Phone, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom LeetCode icon component
  const LeetCodeIcon = () => (
    <svg 
      width="18" 
      height="18" 
      viewBox="0 0 24 24" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.661 1.837-.661s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
    </svg>
  );

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background dark:from-primary/5 dark:to-background"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      <div className="section-container relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            SSU-YUAN LIN
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">(Blake)</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-xl md:text-3xl font-medium text-primary">
            Software Engineer
          </h2>
          <p className="text-lg mt-2 max-w-2xl text-muted-foreground">
            Specializing in computer vision and 3D metrology with a proven track record of developing 
            and optimizing algorithms for industrial applications.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="mailto:ssu.yuan.lin@gmail.com"
            className="flex items-center gap-2 bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground px-4 py-2 rounded-md transition-colors"
          >
            <Mail size={18} />
            <span>ssu.yuan.lin@gmail.com</span>
          </a>
          <a
            href="tel:+886923777015"
            className="flex items-center gap-2 bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground px-4 py-2 rounded-md transition-colors"
          >
            <Phone size={18} />
            <span>(+886) 923-777-015</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ssu-yuan-lin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground px-4 py-2 rounded-md transition-colors"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://leetcode.com/u/ssuyuan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground px-4 py-2 rounded-md transition-colors"
          >
            <LeetCodeIcon />
            <span>LeetCode</span>
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute bottom-20 md:bottom-10"
        >
          <motion.a
            href="#about"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}