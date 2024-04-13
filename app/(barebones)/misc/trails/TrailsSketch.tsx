"use client";

import ClientSketchWrapper from "@/components/ClientSketch";
import P5 from "p5";
import { getRandomFloat, getRandomInt } from "../waves/utils";

const PERIOD = 3;
const FRAME_RATE = 120;

const identity = (x: number) => x;

const transformers = [Math.sin, Math.cos, identity];

function getRandomTrigFunction() {
  const phaseBase = Math.PI;
  const phaseMultiplier = Math.pow(2, getRandomInt(-2, 2));
  const randomPhase = getRandomInt(0, 1000);
  const randomTransformer = transformers[getRandomInt(0, transformers.length)];

  return (animationPosition: number) => {
    const x = animationPosition * phaseBase * phaseMultiplier + randomPhase;
    const y = randomTransformer(x);
    return y;
  };
}

export default function TrailsSketch() {
  function setup(p5: P5, canvasParentRef: Element) {
    p5.createCanvas(p5.windowWidth, p5.windowHeight - 200).parent(
      canvasParentRef
    );
    p5.background(0, 0, 0);
    p5.stroke(255);
    p5.strokeWeight(2);
    p5.frameRate(60);
  }

  const r = getRandomTrigFunction();
  const g = getRandomTrigFunction();
  const b = getRandomTrigFunction();

  const randomPeriodMultiplier = getRandomInt(5, 15);

  function draw(p5: P5) {
    const width = p5.width;
    const height = p5.height;

    let framesInAnimation = FRAME_RATE * PERIOD;
    let currentPosition =
      (p5.frameCount % framesInAnimation) / framesInAnimation;

    // p5.background(
    //   Math.sin(currentPosition * Math.PI) * 255,
    //   100,
    //   Math.cos(currentPosition * Math.PI) * 255,
    //   currentPosition * 255
    // );
    p5.background(0, 0, 0, 10);

    p5.point(p5.mouseX, p5.mouseY);

    p5.textSize(32);
    p5.fill(255);
    p5.stroke(255);
    // p5.text(`${p5.pmouseX}, ${p5.pmouseY}`, 10, 30);
    // p5.text(`${width}, ${height}`, 10, 60);
    // p5.text(currentPosition, 10, 90);

    const periodMultiplier =
      Math.min(Math.max(p5.mouseX / width, 0.25), 0.75) *
      randomPeriodMultiplier;

    const x = currentPosition * Math.PI * periodMultiplier;

    const y = (Math.cos(x) * height) / 2 + height / 2;
    const y1 = (Math.cos(x - Math.PI) * height) / 2 + height / 2;
    const y2 = (Math.sin(x - Math.PI / 2) * height) / 2 + height / 2;
    const y3 = (Math.tan(x - Math.PI / 2) * height) / 2 + height / 2;
    const y4 = (Math.tan(x - Math.PI / 2) * height) / 2 + height / 2;
    const color = [
      Math.abs(r(currentPosition)) * 255,
      Math.abs(g(currentPosition)) * 255,
      Math.abs(b(currentPosition)) * 255,
      255,
    ];

    // p5.text(`${color[0]}`, 10, 120);
    // p5.text(`${color[1]}`, 10, 150);
    // p5.text(`${color[2]}`, 10, 180);

    // p5.stroke(color);
    // p5.fill(color);

    p5.stroke(255 - color[0], 255 - color[1], 255 - color[2], color[3]);
    p5.fill(255);

    p5.circle(currentPosition * width, y, 2);
    p5.circle(width - currentPosition * width, y, 2);

    p5.circle(currentPosition * width, y1, 2);
    p5.circle(width - currentPosition * width, y1, 2);

    p5.circle(currentPosition * width, y2, 2);
    p5.circle(width - currentPosition * width, y2, 2);

    p5.circle(currentPosition * width, y3, 2);
    p5.circle(width - currentPosition * width, y3, 2);

    p5.circle(currentPosition * width, y4, 2);
    p5.circle(width - currentPosition * width, y4, 2);

    // p5.line(currentPosition * width, y, currentPosition * width, y1);
    // p5.line(width - currentPosition * width, y, currentPosition * width, y1);

    p5.line(currentPosition * width, y, currentPosition * width, y2);
    p5.line(width - currentPosition * width, y, currentPosition * width, y2);

    p5.line(currentPosition * width, y2, currentPosition * width, y);
    p5.line(width - currentPosition * width, y2, currentPosition * width, y);

    p5.line(0, y, width, y);
    // p5.line(0, y1, width, y1);
    // p5.line(0, y2, width, y2);
    p5.line(currentPosition * width, y1, width, y3);
    p5.line(width - currentPosition * width, y1, width, y3);

    // p5.line(width - currentPosition * width, y3, currentPosition * width, y1);
    // p5.line(width - currentPosition * width, y3, width, y2);
    // p5.line(width - currentPosition * width, y3, width, y);
    // p5.line(currentPosition * width, y, width - currentPosition * width, y3);
    // p5.line(width - currentPosition * width, y3, currentPosition * width, y1);
    // p5.line(width - currentPosition * width, y4, currentPosition * width, y);
    // p5.line(currentPosition * width, y4, currentPosition * width, y1);
    // p5.line(currentPosition * width, y4, width - currentPosition * width, y);
    // p5.line(currentPosition * width, y4, width - currentPosition * width, y3);

    // drawRandomCurves.forEach((drawRandomCurve) =>
    //   drawRandomCurve(p5, currentPosition)
    // );

    // p5.circle(0, y, 10);
    // p5.circle(width, y, 10);

    // p5.line(0, height / 2, width, height / 2);
    // p5.line(width / 2, 0, width / 2, height);
  }
  return <ClientSketchWrapper setup={setup} draw={draw} />;
}
