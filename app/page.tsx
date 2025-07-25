"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.body.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-2 underline">Lumi</h1>
      </header>

      <Button id="theme-toggle" onClick={toggleTheme}>
        {isDark ? "light" : "dark"}
      </Button>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-2">
          <li>
            <a href="https://noxitechnologies.com" className="underline-hover">
              NoxiTech website
            </a>
          </li>
          <li>
            <a href="rpalette.netlify.app" className="underline-hover">
              Random color palette generator (discontinued)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Lumi2Ex/DirWiz"
              className="underline-hover"
            >
              DirWiz (wip)
            </a>
          </li>
          <li>
            <a
              href="https://addons.mozilla.org/fr/firefox/addon/qsc"
              className="underline-hover"
            >
              Quick Search Shortcuts (QSC)
            </a>
          </li>
          <li>
            <Link href="/downloads" className="underline-hover">
              Downloads
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">About Me:</h2>
        16 y/o and french, doing my best in this world.
        Miniamaker, Designer, Web dev, Game dev, Software dev
      </section>
    </div>
  );
}
