import React from "react";
import Image from "next/image";
import { config } from "@/data/config";

export default function Header() {
  return (
    <div className="relative  h-[240px]">
      <div className="absolute inset-0 flex justify-center items-center"></div>
      <div
        className="absolute inset-0  bg-top bg-no-repeat    bg-cover"
        style={{ backgroundImage: `url(${config.bgBanner})` }}
      />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
}
