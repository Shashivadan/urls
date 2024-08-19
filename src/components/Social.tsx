"use clinet";

import React from "react";

import { Alert } from "@/components/ui/alert";

import { config } from "../data/config";
export default function Social() {
  return (
    <div className=" flex-col flex justify-center items-center mt-10 gap-2 p-2 md:p-0">
      {config.links.map((item, index) => (
        <Alert
          key={index}
          className="md:w-1/4 text-white border-none bg-zinc-800 flex gap-2  "
        >
          <div
            dangerouslySetInnerHTML={{ __html: `<span>${item.icon}</span>` }}
          />

          <a
            target="_blank"
            href={item.link}
            className="flex items-center gap-3"
          >
            <div>{item.name}</div>
          </a>
        </Alert>
      ))}
    </div>
  );
}
