import dynamic from "next/dynamic";
import { NextPage } from "next/types";
import p5Types from "p5";
import { SketchProps } from "react-p5";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

const FRAME_RATE = 60;

const setup = (p5: p5Types, canvasParentRef: Element) => {
  p5.createCanvas(p5.windowWidth, p5.windowHeight - 200).parent(
    canvasParentRef
  );
  p5.background(0);
  p5.stroke(255);
  p5.strokeWeight(2);
  p5.frameRate(FRAME_RATE);
};

const drawGen = () => {
  const state = {
    p1: [],
  };
};

const drawLine = () => {
  
}

const draw: SketchProps["draw"] = (p5: p5Types) => {
  p5.noFill();
  

  return;
};

const LinesSketch: React.FC = () => {
  return <Sketch setup={setup} draw={draw} />;
};

const LinesPage: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <LinesSketch />
    </div>
  );
};

LinesPage.displayName = "Waves";

export default LinesPage;
