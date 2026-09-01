"use client";

import { motion, type Variants } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  once?: boolean;
};

const defaults: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay },
  }),
};

export default function Reveal({
  children,
  className,
  delay = 0,
  variants,
  once = true,
}: Props) {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants ?? defaults}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}