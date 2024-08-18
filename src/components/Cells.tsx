import React from "react";
import { Button } from "./ui/button";

export default function Cells({ title }: { title: string[] }) {
  return (
    <div className=" flex gap-2 flex-wrap justify-center">
      {title.map((item: string, index: number) => (
        <>
          <Button key={index} className=" rounded-full h-8" asChild>
            <div>{item}</div>
          </Button>
        </>
      ))}
    </div>
  );
}
