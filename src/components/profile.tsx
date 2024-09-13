"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import BlurIn from "./magicui/blur-in";
import { config } from "@/data/config";

export default function Profile() {
  return (
    <motion.div
      className="w-full flex flex-col gap-4 items-center h-56 justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Image
          src={config.avater}
          alt="profile"
          width={100}
          height={100}
          className="rounded-full"
        />
        <motion.div
          className="absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-50 blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        ></motion.div>
      </motion.div>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <BlurIn
          word={config.name}
          className="text-xl md:text-xl font-bold text-white dark:text-white"
        />
      </motion.div>
      <motion.div
        className="text-zinc-400 text-base"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Full-stack Web Developer
      </motion.div>
    </motion.div>
  );
}
