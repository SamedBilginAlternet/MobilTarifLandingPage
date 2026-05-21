"use client";
import React, { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
  as?: keyof React.JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const dirClass =
    direction === "up"
      ? "reveal"
      : direction === "left"
      ? "reveal-left"
      : direction === "right"
      ? "reveal-right"
      : "reveal-fade";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = Tag as any;
  return (
    <Comp ref={ref} className={`${dirClass} ${className}`}>
      {children}
    </Comp>
  );
}
