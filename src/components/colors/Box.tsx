"use client";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

type ColorShade = {
  name: string;
  variable: string;
};

type ColorGroup = {
  label: string;
  shades: ColorShade[];
};

// 🎨 Hikasami Color System
const colorGroups: ColorGroup[] = [
  {
    label: "Фон",
    shades: [
      { name: "bg-primary", variable: "--ds-background-primary" },
      { name: "bg-secondary", variable: "--ds-background-secondary" },
      { name: "border-primary", variable: "--ds-border-primary" },
    ],
  },
  {
    label: "Белый",
    shades: [{ name: "white", variable: "--ds-white" }],
  },
  {
    label: "Серый",
    shades: [900, 800, 700, 600, 500, 400, 300, 200, 100].map((lvl) => ({
      name: `gray-${lvl}`,
      variable: `--ds-gray-${lvl}`,
    })),
  },
  {
    label: "Розовый ",
    shades: [900, 800, 700, 600, 500, 400, 300, 200, 100].map((lvl) => ({
      name: `pink-${lvl}`,
      variable: `--ds-pink-${lvl}`,
    })),
  },
  {
    label: "Зелёный",
    shades: [900, 800, 700, 600, 500, 400, 300, 200, 100].map((lvl) => ({
      name: `green-${lvl}`,
      variable: `--ds-green-${lvl}`,
    })),
  },
  {
    label: "Жёлтый",
    shades: [900, 800, 700, 600, 500, 400, 300, 200, 100].map((lvl) => ({
      name: `yellow-${lvl}`,
      variable: `--ds-yellow-${lvl}`,
    })),
  },
  {
    label: "Оранжевый",
    shades: [900, 800, 700, 600, 500, 400, 300, 200, 100].map((lvl) => ({
      name: `orange-${lvl}`,
      variable: `--ds-orange-${lvl}`,
    })),
  },
  {
    label: "Красный",
    shades: [900, 800, 700, 600, 500, 400, 300, 200, 100].map((lvl) => ({
      name: `red-${lvl}`,
      variable: `--ds-red-${lvl}`,
    })),
  },
];

export const HikasamiColorBox: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [copyType, setCopyType] = useState<"name" | "hex">("name");

  const handleCopy = async (shade: ColorShade) => {
    let textToCopy = shade.variable;

    if (copyType === "hex") {
      const value = getComputedStyle(document.documentElement).getPropertyValue(
        shade.variable
      );
      textToCopy = value.trim();
    }

    await navigator.clipboard.writeText(textToCopy);
    setCopied(shade.variable);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Переключатель копирования */}
      <div className="flex gap-4 mb-6">
        <label className="text-fd-foreground text-sm flex items-center gap-1">
          <input
            type="radio"
            name="copyType"
            value="name"
            checked={copyType === "name"}
            onChange={() => setCopyType("name")}
          />
          Копировать имя
        </label>
        <label className="text-fd-foreground text-sm flex items-center gap-1">
          <input
            type="radio"
            name="copyType"
            value="hex"
            checked={copyType === "hex"}
            onChange={() => setCopyType("hex")}
          />
          Копировать HEX
        </label>
      </div>

      {colorGroups.map((group) => (
        <div
          key={group.label}
          className="flex flex-col items-start gap-2 md:flex-row md:items-center"
        >
          {/* Название группы */}
          <div className="w-[120px] flex-shrink-0">
            <p className="text-sm font-medium text-fd-foreground">{group.label}</p>
          </div>

          {/* Сетка цветов */}
          <ul
            aria-describedby={group.label}
            className="flex w-full gap-1 md:gap-2 list-none not-prose flex-wrap"
          >
            {group.shades.map((shade) => (
              <li key={shade.name} className="w-[68px]">
                <button
                  type="button"
                  className="shadow-border-inset flex aspect-square border w-full cursor-pointer items-center justify-center rounded-sm md:h-10 group relative"
                  style={{ backgroundColor: `var(${shade.variable})` }}
                  onClick={() => handleCopy(shade)}
                  title={`${shade.name} (${shade.variable})`}
                >
                  {copied === shade.variable ? (
                    <Check
                      className="absolute inset-0 m-auto text-fd-foreground"
                      width={14}
                      height={14}
                    />
                  ) : (
                    <Copy
                      className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 text-fd-foreground transition"
                      width={14}
                      height={14}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
