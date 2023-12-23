"use client";

import Link from "next/link";
import { randomizedParams } from "./utils";

export default function RandomizeButton() {
  return (
    <Link href={`/misc/waves?${randomizedParams()}`}>
      <div className="default-button mb-5 mt-5">Randomize</div>
    </Link>
  );
}
