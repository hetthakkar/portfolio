import TrailsSketchWithWrapper from "./TrailsSketchWithReset";

export const metadata = {
  title: "Trails",
  description: "Math art",
};

export default function TrailsPage() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center items-center">
      <h4 className="text-white text-xl font-extralight mb-4r">Tap anywhere</h4>
      <TrailsSketchWithWrapper />
    </div>
  );
}
