"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarChild className="top-2" />
    </div>
  );
}

function NavbarChild({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Skills</HoveredLink>
            <HoveredLink href="/">Education</HoveredLink>
            <HoveredLink href="/">Projects</HoveredLink>
           </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Prtaxcellent"
              href="/project"
              src="/prtaxcellent.png"
              description="React | Freelance"
            />
            <ProductItem
              title="Waves - PWA"
              href="/project"
              src="/waves.png"
              description="React, Pwa - Progressive Web Application"
            />
            <ProductItem
              title="Dphi"
              href="/project"
              src="/dphi.png"
              description="React, Node, Express, mongoDB, redux, style-component"
            />
            <ProductItem
              title="Ecell"
              href="/project"
              src="/ecell.png"
              description="React, Node, Express, mongoDB, Tailwind CSS"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Me">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Message Me</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
