"use client";

import { useState, useEffect } from "react";

export default function TaskCompleted() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 5000);
  });
  return (
    <div>
      <video src="123.mov" autoPlay muted />
      <div className="text-center items-center justify-center -mt-3 text-xl">
        <span>{showText ? "You gained 5 Tons!" : null}</span>
      </div>
    </div>
  );
}
