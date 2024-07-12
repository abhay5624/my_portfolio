"use client"
import React from "react";
import { FlipWords } from "./ui/flip-words";
import { AuroraBackground } from "./ui/aurora-background";
import { MovingBorderDemo } from "./AnimatedButton";
import { motion } from "framer-motion";

export function HeroSection() {
  const words = ["Software Engineer", "Developer", "Front-end Developer", "Full-stack Developer"];

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      > 
      <div className="text-3xl md:text-7xl font-bold text-white text-center ">
        <h1> My name is Abhay Kumar Sharma </h1>
        I am a 
        <FlipWords words={words} duration={2000} className="text-2xl"/> <br />
        <MovingBorderDemo />
      </div>
     
        </motion.div>
    </AuroraBackground>
  );
}
