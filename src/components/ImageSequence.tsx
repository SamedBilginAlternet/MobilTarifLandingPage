"use client";
import { useEffect, useRef, useState } from "react";

export interface ImageItem {
  src: string;
  alt: string;
}

interface Props {
  images?: ImageItem[];
  scrollBehavior?: "viewport" | "scrollSection";
  sectionId?: string;
  smoothing?: number;
  preloadImages?: boolean;
  className?: string;
}

export default function ImageSequence({
  images = [],
  scrollBehavior = "scrollSection",
  sectionId = "",
  smoothing = 0.1,
  preloadImages = true,
  className = "",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loadedImages = useRef<HTMLImageElement[]>([]);
  const currentFrame = useRef(0);
  const targetFrame = useRef(0);
  const rafId = useRef<number>(0);
  const [loaded, setLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    if (!images.length) return;

    const imgs: HTMLImageElement[] = [];
    let count = 0;

    const onLoad = () => {
      count++;
      if (count === images.length) {
        loadedImages.current = imgs;
        setLoaded(true);
      }
    };

    images.forEach((item, i) => {
      const img = new Image();
      img.src = item.src;
      img.alt = item.alt;
      if (preloadImages) {
        img.onload = onLoad;
        img.onerror = onLoad; // still advance counter on error
      }
      imgs[i] = img;
    });

    if (!preloadImages) {
      loadedImages.current = imgs;
      setLoaded(true);
    }

    return () => {
      imgs.forEach((img) => { img.onload = null; img.onerror = null; });
    };
  }, [images, preloadImages]);

  // Draw a frame to canvas
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = loadedImages.current[Math.round(index)];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    // objectFit: contain
    const scale = Math.min(width / img.naturalWidth, height / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    const x = (width - w) / 2;
    const y = (height - h) / 2;
    ctx.drawImage(img, x, y, w, h);
  };

  // RAF loop with lerp smoothing
  useEffect(() => {
    if (!loaded) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const clamp = (v: number, min: number, max: number) =>
      Math.max(min, Math.min(max, v));

    const tick = () => {
      currentFrame.current = lerp(
        currentFrame.current,
        targetFrame.current,
        Math.min(smoothing + 0.05, 1)
      );

      const snapped = clamp(
        Math.round(currentFrame.current),
        0,
        loadedImages.current.length - 1
      );
      drawFrame(snapped);
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, [loaded, smoothing]); // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll → targetFrame mapping
  useEffect(() => {
    if (!loaded || !images.length) return;

    const maxFrame = images.length - 1;

    const getProgress = (): number => {
      if (scrollBehavior === "scrollSection" && sectionId) {
        const el = document.getElementById(sectionId);
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        const total = el.scrollHeight - window.innerHeight;
        return total > 0 ? Math.max(0, -rect.top) / total : 0;
      }
      // viewport mode
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 ? window.scrollY / max : 0;
    };

    const onScroll = () => {
      targetFrame.current = Math.min(
        maxFrame,
        Math.max(0, getProgress() * maxFrame)
      );
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [loaded, images, scrollBehavior, sectionId]);

  // Resize canvas to match display size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ro = new ResizeObserver(() => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    });
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
          Yükleniyor…
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.3s" }}
        aria-label="Uygulama ekranı animasyonu"
      />
    </div>
  );
}
