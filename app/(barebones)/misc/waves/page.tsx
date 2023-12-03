import Link from "next/link";
import WavesSketch from "./WavesSketch";
import { Suspense } from "react";
import ShareSketch from "./ShareSketch";
import { randomizedParams } from "./utils";

export const metadata = {
  title: "Waves | Het Thakkar",
  description: "Waves animation",
};

export default function WavesPage() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center items-center">
      <Suspense fallback={"Loading"}>
        <WavesSketch />
      </Suspense>
      <div className="flex gap-4">
        <Link href="/" className="default-button mb-5 mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "white" }}
          >
            <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
          </svg>
        </Link>
        <Link href={`/misc/waves?${randomizedParams()}`}>
          <div className="default-button mb-5 mt-5">Randomize</div>
        </Link>
      </div>
      <div>
        <ShareSketch />
      </div>
    </div>
  );
}
