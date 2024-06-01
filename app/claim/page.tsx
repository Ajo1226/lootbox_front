"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import LootBoxOpening from "@/public/lootbox-opening.gif";

export default function TaskCompleted() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 6000);
  });
  return (
    <div>
      <Image className="" src={LootBoxOpening} alt="loading..." />
      <div className="text-center items-center justify-center -mt-3 text-xl">
        <span>{showText ? "You gained 5 Tons!" : null}</span>
      </div>
    </div>
  );
}
