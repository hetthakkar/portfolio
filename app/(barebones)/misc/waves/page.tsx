import WavesSketch from "./WavesSketch";
import { Suspense } from "react";
import ShareSketch from "./ShareSketch";
import RandomizeButton from "./RandomizeButton";
import HomeButton from "@/components/HomeButton";

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
        <HomeButton />
        <RandomizeButton />
      </div>
      <div className="mb-20">
        <ShareSketch />
      </div>
    </div>
  );
}
