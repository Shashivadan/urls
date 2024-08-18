import React from "react";
import Image from "next/image";
import { config } from "@/data/config";
import Verfiy from "@/components/ui/svgs/Verfiy";
import Cells from "./Cells";
import Social from "./Social";

export default function InfoCard() {
  return (
    <div className="  w-full  md:h-96">
      <div className="flex items-center justify-center mt-5">
        <Image
          src={config.avater}
          alt="avater"
          className=" rounded-full   border-solid border-2  border-black"
          objectFit="contain"
          width={100}
          height={100}
        />
      </div>
      <div className=" flex justify-center items-center gap-1">
        <h1 className="text-2xl font-bold text-center">{config.name}</h1>{" "}
        <div>
          {" "}
          <Verfiy />
        </div>
      </div>
      <div className="text-center text-sm text-zinc-700 mb-2">
        <a
          href="https://hi.shashivadan.xyz"
          className=" text-center text-sm text-zinc-600"
          target="_blank"
        >
          hi.shashivadan.xyz
        </a>
      </div>
      <div className=" flex justify-center">
        <Cells title={config.hobbies} />
      </div>
      <div>
        <Social />
      </div>
    </div>
  );
}
