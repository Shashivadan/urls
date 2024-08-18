"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Cells({ title }: { title: string[] }) {
  return (
    <motion.div
      className="flex gap-2 flex-wrap justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {title.map((item: string, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Button className="rounded-full h-8" asChild>
            <div>{item}</div>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}
