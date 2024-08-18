"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";

export default function Home() {
  return (
    <>
      <div className="bg-primary-color text-white h-screen bg-black overflow-hidden">
        <motion.div
          className="hidden md:block md:absolute md:top-[-300px] md:left-[500px] h-[1000px] w-[1000px] overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(closest-side, rgba(128,0,128,0.21), #0000)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
        <div className="relative h-full w-full">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Header />
          </motion.div>
          <motion.div
            className="absolute top-40 w-full"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex justify-center">
              <InfoCard />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
