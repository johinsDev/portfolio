"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const LINKS = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/projects",
    name: "my projects",
  },
  {
    path: "/contact",
    name: "contact",
  },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-x-8 xl:flex">
      {LINKS.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className="hover:text-primary relative capitalize transition-all"
        >
          {link.path === pathname && (
            <motion.span
              initial={{
                y: "-100%",
              }}
              animate={{
                y: 0,
              }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className="bg-primary absolute top-full h-0.5 w-full"
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
