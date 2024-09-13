"use client";

import React from "react";
import { motion } from "framer-motion";
import { config } from "@/data/config";

export default function HyperLinks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="text-center p-6 flex flex-col items-center gap-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {config.links.map((link, index) => (
        <motion.a
          key={index}
          href={link.link}
          className="isolate p-2 w-full md:w-1/2 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 text-base hover:bg-white/30 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.name}
        </motion.a>
      ))}
    </motion.div>
  );
}
