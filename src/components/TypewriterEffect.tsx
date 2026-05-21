"use client";
import { useState, useEffect, useRef, useMemo } from "react";

interface WordItem {
  word: string;
}

interface Props {
  words?: WordItem[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  cursorColor?: string;
  cursorWidth?: number;
  cursorHeight?: number;
  textColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function TypewriterEffect({
  words = [{ word: "Hello" }, { word: "World" }],
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 1000,
  cursorColor = "#2c76be",
  cursorWidth = 2,
  cursorHeight = 100,
  textColor,
  className = "",
  style,
}: Props) {
  const wordList = useMemo(() => words.map((w) => w.word), [words]);
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Typewriter logic
  useEffect(() => {
    const current = wordList[wordIndex % wordList.length];

    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, typingSpeed);
      } else {
        setIsPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % wordList.length);
      }
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isDeleting, isPaused, wordIndex, wordList, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className} style={{ color: textColor, ...style }}>
      {displayed}
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: cursorWidth,
          height: `${cursorHeight}%`,
          backgroundColor: cursorColor,
          marginLeft: 2,
          verticalAlign: "middle",
          opacity: cursorVisible ? 1 : 0,
          transition: "opacity 0.1s",
        }}
      />
    </span>
  );
}
