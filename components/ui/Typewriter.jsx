"use client";

import { useState, useEffect } from "react";

export default function Typewriter({ 
  texts, 
  delay = 100, 
  pauseDelay = 2000,
  className = "" 
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      // When finished typing
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDelay);
      }
      // When finished deleting
      else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, delay, pauseDelay]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}