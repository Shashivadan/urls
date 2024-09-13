"use client";

import React from "react";
import { config } from "@/data/config";

export default function HyperLinks() {
  return (
    <div className=" text-center p-6 flex flex-col items-center gap-3">
      {config.links.map((link) => (
        <>
          <a
            href={link.link}
            className="isolate p-3 w-full md:w-1/2 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 text-base "
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        </>
      ))}
    </div>
  );
}
