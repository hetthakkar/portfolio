"use client";

import ClientSketchWrapper from "@/components/ClientSketch";
import P5 from "p5";

const FRAME_RATE = 120;
const PERIOD = 0.5;

function setup(p5: P5, canvasParentRef: Element) {
  p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  p5.background(0, 0, 0);
  p5.stroke(255);
  p5.strokeWeight(2);
  p5.frameRate(60);
  p5.rectMode("center");
}

function rrect(p5: P5, x: number, y: number, w: number, h: number, r: number) {
  p5.push();
  p5.translate(x, y);
  p5.rotate(r);
  p5.rect(0, 0, w, h);
  p5.pop();
  // p5.rotate(-r);
}

function draw(p5: P5) {
  p5.background(0, 0, 0, 75);
  p5.line(0, p5.height / 2, p5.width, p5.height / 2);
  p5.line(p5.width / 2, 0, p5.width / 2, p5.height);

  p5.text(p5.frameCount, 10, 10);
  rrect(
    p5,
    p5.width / 2,
    p5.height / 2,
    10,
    1000,
    (p5.frameCount % (FRAME_RATE * PERIOD)) * (p5.PI / (FRAME_RATE * PERIOD))
  );
}

export default function SwarmsSketch() {
  return <ClientSketchWrapper setup={setup} draw={draw} />;
}
