import React, { useEffect, useState, useRef } from "react";

export default function TypingText({ className, children, speed }) {
  let text = children || "";
  const typingSpeed = speed; // Kecepatan mengetik (ms per karakter)

  const [displayedText, setDisplayedText] = useState("");
  const containerRef = useRef(null);
  const typingRef = useRef(null);

  useEffect(() => {
    let i = 0;
    const typeEffect = () => {
      if (i < text.length) {
        setDisplayedText((prevText) => prevText + text[i]);
        setTimeout(() => {
          // Cek apakah teks sudah overflow setelah karakter ditambahkan dan rendering selesai
          if (
            typingRef.current.offsetWidth >= containerRef.current.clientWidth
          ) {
            setDisplayedText((prevText) => prevText + "\n");
          }
          i++;
          setTimeout(typeEffect, typingSpeed);
        }, 0); // Penundaan minimum untuk menunggu rendering selesai
      }
    };
    typeEffect();
  }, [text, typingSpeed]);

  return (
    <>
      <div
        ref={containerRef}
        className="overflow-y-scroll w-full h-fit whitespace-pre-wrap text-center mb-5 p-5"
      >
        <span className={`${className}`} ref={typingRef}>
          {displayedText}
        </span>
      </div>
    </>
  );
}
