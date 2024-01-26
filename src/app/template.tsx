"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

export default function Template({ children }: PropsWithChildren) {
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

      <div
        style={{
          height: 4000,
        }}
      ></div>
    </>
  );
}
