import React from "react";
import Image from "next/image";

import BlurIn from "./magicui/blur-in";
import { config } from "@/data/config";

export default function Profile() {
  return (
    <div className=" w-full flex flex-col gap-4 items-center h-56  justify-center">
      <div className=" relative">
        <Image
          src={config.avater}
          alt="profile"
          width={100}
          height={100}
          className="rounded-full "
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-50 blur-2xl"></div>
      </div>
      <div className="text-center ">
        <BlurIn
          word={config.name}
          className="text-xl md:text-xl font-bold text-white dark:text-white"
        />
      </div>
      <div className=" text-zinc-400 text-base">Full-stack Web Developer</div>
    </div>
  );
}
