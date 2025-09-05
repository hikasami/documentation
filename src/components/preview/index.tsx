"use client";
import React from "react";
import { Wrapper } from "./wrapper";
import previewData from "./previews.json";

import {
  CirclecheckRegularIcon,
  HeartRegularIcon,
  HouseRegularIcon,
  StarRegularIcon,
  ThumbsupRegularIcon,
  TrianglethunderboltRegularIcon
} from "../icons";

export const iconsMap: Record<string, React.ReactNode> = {
  CirclecheckRegularIcon: <CirclecheckRegularIcon />,
  HeartRegularIcon: <HeartRegularIcon />,
  HouseRegularIcon: <HouseRegularIcon />,
  StarRegularIcon: <StarRegularIcon />,
  ThumbsupRegularIcon: <ThumbsupRegularIcon />
};

interface TextPreview {
  type: "text";
  title: string;
  description: string;
  link: { text: string; href: string };
  icons: { name: string; color: string }[];
}

interface BackgroundPreview {
  type: "backgrounds";
  blocks: {
    background: string;
    border: string;
    children: { pos: "center" | "bottom"; label: string }[];
  }[];
}

type PreviewData = TextPreview | BackgroundPreview;

interface PreviewProps {
  name: keyof typeof previewData;
}

export const Preview: React.FC<PreviewProps> = ({ name }) => {
  const data = previewData[name] as PreviewData;

  if (!data) {
    return (
      <Wrapper>
        <p className="flex flex-row items-center gap-2">
          <TrianglethunderboltRegularIcon /> Превью{" "}
          <span className="font-bold">{name}</span> не найдено
        </p>
      </Wrapper>
    );
  }

  // 🔹 Текстовое превью
  if (data.type === "text") {
    return (
      <Wrapper>
        <div className="bg-fd-background p-4 rounded-xl flex h-[260px] w-full flex-col items-center justify-center md:h-[198px] md:flex-row">
          {/* Левая часть */}
          <div className="flex h-[65%] w-[63%] items-center justify-center border-gray-400 md:h-full md:w-[50%]">
            <div className="flex w-[316px] flex-col">
              <p className="text-base font-semibold not-prose" style={{ color: "var(--ds-gray-100)" }}>
                {data.title}
              </p>
              <p className="text-sm font-normal not-prose" style={{ color: "var(--ds-gray-300)" }}>
                {data.description}
              </p>
              <a
                href={data.link.href}
                className="mt-2 flex items-center gap-0.5 text-sm no-underline not-prose"
                style={{ color: "var(--color-fd-primary)" }}
              >
                {data.link.text}
              </a>
            </div>
          </div>

          {/* Правая часть */}
          <div className="md:h-ful flex h-[35%] w-full items-center justify-center gap-7 border-t md:h-full md:w-[50%] md:gap-5 md:border-l md:border-t-0">
            {data.icons.map((icon: any, index: number) => (
              <div key={index} style={{ color: icon.color }}>
                {iconsMap[icon.name]}
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }

  // 🔹 Background-превью
  if (data.type === "backgrounds") {
    return (
      <Wrapper>
        <div className="bg-fd-background rounded-xl flex h-[700px] w-full flex-col md:h-[412px] md:flex-row overflow-hidden">
          {data.blocks.map((block: any, index: number) => (
            <div
              key={index}
              style={{backgroundColor: block.background}}
              className={` flex h-[50%] items-center justify-center ${
                index === 0
                  ? "border-r md:h-[100%] md:w-[50%]"
                  : "md:h-[100%] md:w-[50%]"
              } ${index === 1 ? "border-t md:border-none" : ""}`}
            >
              <div
                className={`relative flex h-[164px] w-[164px] items-center justify-center rounded-[12px] border`}
                style={{ backgroundColor: block["card-background"] }}
              >
                {block.children.map((child: any, idx: number) => (
                  <div
                    key={idx}
                    className="text-fd-foreground flex h-6 w-6 items-center justify-center rounded-full text-xs"
                    style={{
                      position: child.pos === "bottom" ? "absolute" : "relative",
                      bottom: child.pos === "bottom" ? "-57px" : undefined,
                      backgroundColor: block.background,
                    }}
                  >
                    {child.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
        <p className="flex flex-row items-center gap-2"><TrianglethunderboltRegularIcon /> Превью <span className="font-bold">{name}</span> не найдено</p>
    </Wrapper>
  );
};
