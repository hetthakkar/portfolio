"use client";

import { useState } from "react";
import { getRandomInt } from "../waves/utils";
import TrailsSketch from "./TrailsSketch";

export default function TrailsSketchWithWrapper() {
  const [key, setKey] = useState(0);

  function reset() {
    setKey(getRandomInt(0, 1000));
  }

  return (
    <>
      <TrailsSketch key={key} />
      <button
        className="bg-primary p-2 text-white border-2 border-white rounded-lg mt-4"
        onClick={reset}
      >
        Reset
      </button>
    </>
  );
}
