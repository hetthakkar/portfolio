"use client";

import ClientSketchWrapper from "@/components/ClientSketch";
import P5 from "p5";
import { getRandomInt } from "../waves/utils";

const PERIOD = 1;
const FRAME_RATE = 120;

const transformers = [Math.sin, Math.cos, Math.tan];

function getDrawRandomCurve() {
  const phaseMultiplier = Math.pow(2, getRandomInt(-2, 2));
  const randomTransformer = transformers[getRandomInt(0, transformers.length)];
  const randomPhaseShift = getRandomInt(0, 1000);

  const xShiftMultiplier = getRandomInt(1, 10);

  return (p5: P5, animationPosition: number) => {
    const x = animationPosition * Math.PI * phaseMultiplier + randomPhaseShift;
    const y = (randomTransformer(x) * p5.height) / 2 + p5.height / 2;
    const y1 = (randomTransformer(x - Math.PI) * p5.height) / 2 + p5.height / 2;
    const y2 =
      (randomTransformer(x - Math.PI / 2) * p5.height) / 2 + p5.height / 2;
    const y3 =
      (randomTransformer(x - Math.PI / 2) * p5.height) / 2 + p5.height / 2;

    const drawX = animationPosition * p5.width * xShiftMultiplier;

    p5.line(drawX, y, p5.width, y);
    p5.line(drawX, y1, p5.width, y);
    p5.line(drawX, y2, p5.width, y1);
    p5.line(drawX, y3, p5.width, y2);

    p5.circle(drawX, y, 2);
    p5.circle(drawX, y1, 2);
    p5.circle(drawX, y2, 2);
    p5.circle(drawX, y3, 2);
  };
}

export default function TrailsSketch() {
  function setup(p5: P5, canvasParentRef: Element) {
    p5.createCanvas(p5.windowWidth, p5.windowHeight - 200).parent(
      canvasParentRef
    );
    p5.background(255, 0, 0);
    p5.stroke(255);
    p5.strokeWeight(2);
    p5.frameRate(60);
  }

  // const drawRandomCurves = Array.from({ length: 10 }, () =>
  //   getDrawRandomCurve()
  // );

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

    const periodMultiplier = p5.mouseX / width;

    const x = (currentPosition * Math.PI) / 2 / periodMultiplier;
    const y = (Math.sin(x) * height) / 2 + height / 2;
    const y1 = (Math.sin(x - Math.PI) * height) / 2 + height / 2;
    const y2 = (Math.sin(x - Math.PI / 2) * height) / 2 + height / 2;
    const y3 = (Math.tan(x - Math.PI / 2) * height) / 2 + height / 2;
    const color = [
      Math.cos(currentPosition * Math.PI * 4) * 255,
      Math.tan(currentPosition * Math.PI * 4) * 255,
      Math.sin(currentPosition * Math.PI * 4) * 255,
      255,
    ];

    // p5.stroke(color);
    // p5.fill(color);

    p5.stroke(255 - color[0], 255 - color[1], 255 - color[2], color[3]);
    p5.fill(255);

    // p5.circle(currentPosition * width, y, 10);
    // p5.circle(currentPosition * width, y1, 10);
    p5.line(currentPosition * width, y, currentPosition * width, y1);
    p5.line(0, y, width, y);
    p5.line(0, y1, width, y1);
    p5.line(0, y2, width, y2);
    p5.line(currentPosition * width, y3, width, y1);
    p5.line(width - currentPosition * width, y3, currentPosition * width, y1);

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
