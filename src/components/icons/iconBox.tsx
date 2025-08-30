"use client";
import React, { useState, useMemo, useEffect } from "react";
import { iconMap } from "./index";
import { Search, Copy } from "lucide-react";

type IconKey = keyof typeof iconMap;

export const HikasamiIconsBox: React.FC = () => {
  const [search, setSearch] = useState("");
  const [icons, setIcons] = useState<Record<string, React.ReactNode>>({});
  const [copyType, setCopyType] = useState<"name" | "svg">("name");
  const filteredKeys = useMemo(
    () =>
      Object.keys(iconMap).filter((key) =>
        key.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const loadIcon = async (key: IconKey, width = "1.2rem", height = "1.2rem") => {
    if (icons[key]) return;
    const IconComponent = await iconMap[key]();
    setIcons((prev) => ({
      ...prev,
      [key]: <IconComponent width={width} height={height} />,
    }));
  };

  useEffect(() => {
    filteredKeys.forEach((key) => {
      loadIcon(key as IconKey, "1.2rem", "1.2rem");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredKeys]);

  const handleCopy = async (key: IconKey) => {
    if (copyType === "name") {
      await navigator.clipboard.writeText(key);
      alert(`Имя "${key}" скопировано!`);
    } else {
      await loadIcon(key, "1.2rem", "1.2rem");
      const IconComponent = await iconMap[key]();
      const element = <IconComponent width={"1.2rem"} height={"1.2rem"} />;
      import("react-dom/server").then(({ renderToStaticMarkup }) => {
        const svgString = renderToStaticMarkup(element);
        navigator.clipboard.writeText(svgString);
        alert("SVG скопирован!");
      });
    }
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <label>
          <input
            type="radio"
            name="copyType"
            value="name"
            checked={copyType === "name"}
            onChange={() => setCopyType("name")}
          />{" "}
          Копировать имя
        </label>
        <label>
          <input
            type="radio"
            name="copyType"
            value="svg"
            checked={copyType === "svg"}
            onChange={() => setCopyType("svg")}
          />{" "}
          Копировать SVG
        </label>
      </div>
      <button type="button" data-search-full="" className="rounded-xl gap-2 p-3 border bg-fd-popover/80 backdrop-blur-xl text-fd-popover-foreground mb-6 w-full inline-flex items-center ps-2 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground">
        <Search width={20} height={20} className="text-fd-muted-foreground"/>
        <input
          type="text"
          placeholder="Поиск иконки..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent focus:outline-none"
        />
      </button>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {filteredKeys.map((key) => (
          <div
            key={key}
            className="flex flex-col relative items-center block rounded-xl border hover:text-fd-primary bg-fd-card p-4 text-fd-card-foreground transition-colors @max-lg:col-span-full hover:bg-fd-accent cursor-pointer group"
            onClick={() => handleCopy(key as IconKey)}
            title={copyType === "name" ? "Копировать имя" : "Копировать SVG"}
            onMouseEnter={() => loadIcon(key as IconKey)}
          >
            <div className="empty:hidden absolute top-0 right-[1px] z-2 backdrop-blur-lg rounded-lg text-fd-muted-foreground">
              <button type="button" className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 disabled:opacity-50 focus-visible:outline-none p-1 [&amp;_svg]:size-4 group-hover:text-fd-accent-foreground" aria-label={copyType === "name" ? "Копировать имя" : "Копировать SVG"}>
                <Copy width={10} height={10}/>
              </button>
            </div>


            <div className="p-2 rounded transition min-h-[32px] flex items-center justify-center">
              {icons[key] || (
                <span className="text-sm text-fd-muted-foreground">Загрузка...</span>
              )}
            </div>
          </div>
        ))}
        {filteredKeys.length === 0 && (
          <div className="col-span-full text-center text-gray-400">
            Нет совпадений
          </div>
        )}
      </div>
    </div>
  );
};