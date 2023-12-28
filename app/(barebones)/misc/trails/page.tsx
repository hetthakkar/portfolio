import TrailsSketch from "./TrailsSketch";

export const metadata = {
  title: "Trails",
  description: "Math art",
};

export default function TrailsPage() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center items-center">
      <h4 className="text-white text-xl">Tap anywhere</h4>
      <TrailsSketch />
    </div>
  );
}
