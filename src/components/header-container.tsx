"use client";

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function HeaderContainer({ children }: PropsWithChildren) {
  const path = usePathname();

  return (
    <header
      className={cn("sticky top-0 z-30 transition-all", {
        "bg-[#fef9f5] dark:bg-transparent": path === "/",
      })}
      id="header"
    >
      <div className="container">{children}</div>
    </header>
  );
}
