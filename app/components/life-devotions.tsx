"use client";

import { motion } from "framer-motion";
import { Heart, Code, Activity } from "lucide-react";
import Image from "next/image";

export default function LifeDevotions() {
  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-6"
      >
        <Heart className="h-6 w-6 text-primary" />
        <h2 className="section-heading">Life Devotions</h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card shadow-md dark:shadow-black/30 rounded-lg overflow-hidden hover:shadow-lg transition-all hover:scale-[1.02]"
        >
          <div className="relative h-48 w-full">
            <Image
              src="/leetcode_streak.png"
              alt="LeetCode Streak"
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform hover:scale-105"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Code className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">LeetCode</h3>
            </div>
            <p className="text-muted-foreground">
              Consistently solving coding challenges to sharpen algorithmic thinking and problem-solving skills.
            </p>
            <div className="mt-4">
              <a
                href="https://leetcode.com/u/ssuyuan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <span>View Profile</span>
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card shadow-md dark:shadow-black/30 rounded-lg overflow-hidden hover:shadow-lg transition-all hover:scale-[1.02]"
        >
          <div className="relative h-48 w-full">
            <Image
              src="/marathon_42k.jpg"
              alt="Marathon 42K"
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform hover:scale-105"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Marathon</h3>
            </div>
            <p className="text-muted-foreground">
              Participating in marathon events to build endurance, discipline, and mental strength.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-card shadow-md dark:shadow-black/30 rounded-lg overflow-hidden hover:shadow-lg transition-all hover:scale-[1.02]"
        >
          <div className="relative h-48 w-full">
            <Image
              src="/trail_run.jpg"
              alt="Trail Running"
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform hover:scale-105"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Trail Running</h3>
            </div>
            <p className="text-muted-foreground">
              Exploring nature through trail running, embracing challenges and enjoying the outdoors.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}