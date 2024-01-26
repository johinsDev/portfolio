"use client";

import { PropsWithChildren } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

export default function Template({ children }: PropsWithChildren) {
  const { scrollYProgress } = useScroll();

  const translateY = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{
          type: "linear",
          delay: 0.2,
          duration: 0.4,
        }}
      >
        {children}
      </motion.div>
      <motion.span
        className="bg-primary fixed inset-y-0 right-0 z-50 w-1 transition-all duration-700"
        style={{
          translateY,
        }}
      />

      <div
        style={{
          height: 4000,
        }}
      ></div>
    </>
  );
}
