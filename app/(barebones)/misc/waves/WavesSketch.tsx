"use client";

import p5Types from "p5";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { SearchParams } from "./utils";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

const FRAME_RATE = 60;

function setup(p5: p5Types, canvasParentRef: Element) {
  p5.createCanvas(p5.windowWidth, p5.windowHeight - 200).parent(
    canvasParentRef
  );
  p5.background(0);
  p5.stroke(255);
  p5.strokeWeight(2);
  p5.frameRate(FRAME_RATE);
}

function angle(
  frameCount: number,
  frameRate: number,
  animationDuration: number,
  delay: number
) {
  let framesInAnimation = frameRate * animationDuration;
  let currentPosition = (frameCount % framesInAnimation) / framesInAnimation;
  if (currentPosition < delay) {
    return Math.PI;
  } else {
    currentPosition = (currentPosition - delay) / (1 - delay);
  }
  return Math.abs(Math.sin((currentPosition * Math.PI) / 2)) * Math.PI;
}

const drawRotatedRect = (
  x: number,
  y: number,
  width: number,
  height: number,
  animationDuration: number,
  p5: p5Types,
  delay: number,
  angleDelay: number
) => {
  p5.push();
  p5.translate(x, y);
  p5.translate(width / 2, height / 2);
  p5.rotate(
    angle(p5.frameCount + delay, FRAME_RATE, animationDuration, angleDelay)
  );
  p5.translate(-width / 2, -height / 2);
  p5.rect(0, 0, width, height);
  p5.pop();
};

export default function WavesSketch() {
  const searchParams = useSearchParams();
  const queryParams = Object.fromEntries(searchParams ?? []) as SearchParams;

  const {
    m = 15,
    n = 15,
    angleDelay = 0.14,
    rectangleWidth = 2,
    rectangleHeight = 45,
    xPhaseMultiplier = 3,
    yPhaseMultiplier = 3,
    animationDuration = 1.4,
    gap = 20,
    flipX = false,
    flipY = true,
  } = queryParams;

  const draw = (p5: p5Types) => {
    p5.background(0);

    let xStart = p5.width / 2 - ((m - 1) * gap) / 2 - rectangleWidth / 2;
    let yStart = p5.height / 2 - ((n - 1) * gap) / 2 - rectangleHeight / 2;
    // Draw grid of rotatedRectangles
    for (let x = 0; x < m; x++) {
      for (let y = 0; y < n; y++) {
        drawRotatedRect(
          xStart + gap * x,
          yStart + gap * y,
          rectangleWidth,
          rectangleHeight,
          animationDuration,
          p5,
          (flipX ? m - x : x) * xPhaseMultiplier +
            (flipY ? n - y : y) * yPhaseMultiplier,
          angleDelay
        );
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}
