"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div className="m-18">
      <Button
        borderRadius="1.75rem"
        className="bg-black text-white border-slate-800"
      >
        Contact me
      </Button>
    </div>
  );
}
