"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.58, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, text, align = "left" }: { eyebrow: string; title: string; text: string; align?: "left" | "center" }) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-5">{title}</h2>
      <p className="section-copy mt-5">{text}</p>
    </Reveal>
  );
}

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  arrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

export function MagneticButton({ children, className = "", variant = "primary", arrow = false, type = "button", disabled, onClick }: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`magnetic-btn magnetic-btn--${variant} ${className}`}
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const box = event.currentTarget.getBoundingClientRect();
        setOffset({ x: (event.clientX - (box.left + box.width / 2)) * 0.12, y: (event.clientY - (box.top + box.height / 2)) * 0.12 });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={reduceMotion ? undefined : { x: offset.x, y: offset.y }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 19, mass: 0.35 }}
    >
      <span>{children}</span>{arrow && <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.2} />}
    </motion.button>
  );
}

export function TiltCard({ children, className = "", intensity = 10 }: { children: ReactNode; className?: string; intensity?: number }) {
  const reduceMotion = useReducedMotion();
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  return (
    <motion.div
      className={`tilt-card ${className}`}
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        setRotate({ x: -y * intensity, y: x * intensity });
      }}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      animate={reduceMotion ? undefined : { rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 210, damping: 18, mass: 0.55 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = "", className = "" }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setValue(to);
      return;
    }
    const start = performance.now();
    const duration = 1200;
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round((1 - Math.pow(1 - p, 4)) * to));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, to]);

  return <span ref={ref} className={`tabular-nums ${className}`}>{value}{suffix}</span>;
}

export function DotGrid() {
  return <div className="dot-grid" aria-hidden="true" />;
}
