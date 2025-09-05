"use client";
import React from "react";

type ColorItem = {
  name: string;
  variable: string;
  description: string;
};

interface Props {
  colors: ColorItem[];
}

export const HikasamiColorList: React.FC<Props> = ({ colors }) => {
  return (
    <div className="my-5 space-y-1">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`flex h-10 items-center gap-3 ${
            index !== colors.length - 1 ? "border-b" : ""
          }`}
        >
          <div
            className="shadow-border-inset border h-4 w-4 rounded-full"
            style={{ background: `var(${color.variable})` }}
          />
          <p
            className="w-[150px] text-sm font-medium"
            style={{ color: "var(--ds-gray-1000)" }}
          >
            {color.name}
          </p>
          <p
            className="text-sm font-normal text-fd-muted-foreground w-max"
          >
            {color.description}
          </p>
        </div>
      ))}
    </div>
  );
};
