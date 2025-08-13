import { cn } from "../ui/utils";
import * as React from "react";

export default function HeroSection({ title, desc, className, className2 }) {
  return (
    <div className="">
      <div className="text-center">
        <h2 className={cn("text-3xl md:text-3xl font-bold mb-4 text-foreground", className)}>{title}</h2>
        <p className={cn("max-w-3xl mx-auto leading-relaxed", className2)}>{desc}</p>
      </div>
    </div>
  );
}
