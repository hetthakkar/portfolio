import { NextPage } from 'next'
import p5Types from 'p5'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })

let rectangleWidth = 5
let rectangleHeight = 30
let animationDuration = 0.8
let rotationAngle = 0
const frameRate = 60
let drawDist = 150
let drawDistDelta = 1

const angle = (frameCount: number, animationDuration: number) => {
  let framesInAnimation = frameRate * animationDuration
  let currentPosition = (frameCount % framesInAnimation) / framesInAnimation
  return Math.abs(Math.sin((currentPosition * Math.PI) / 2)) * Math.PI
}

const drawRotatedRect = (
  x: number,
  y: number,
  angleCalculator: (frameCount: number, animationDuration: number) => number,
  p5: p5Types
) => {
  p5.push()
  p5.translate(x, y)
  p5.translate(rectangleWidth / 2, rectangleHeight / 2)
  p5.rotate(angleCalculator(p5.frameCount, animationDuration))
  p5.translate(-rectangleWidth / 2, -rectangleHeight / 2)
  p5.rect(0, 0, rectangleWidth, rectangleHeight)
  p5.pop()
}

const Sines: NextPage = () => {
  const [timeInSeconds, seTimeInSeconds] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      seTimeInSeconds((timeInSeconds) => timeInSeconds + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef)
    p5.background(0)
    p5.stroke(255)
    p5.strokeWeight(2)
    p5.frameRate(frameRate)
  }

  const draw = (p5: p5Types) => {
    p5.background(0)
    // Get mouse x, y
    let x = p5.mouseX
    let y = p5.mouseY

    p5.textSize(20)
    p5.text(angle(p5.frameCount, animationDuration), 50, 50)

    drawDist += drawDistDelta
    if (drawDist > 200 / 2) {
      drawDistDelta = -2;
    } else if (drawDist < -200 / 2) {
      drawDistDelta = 2;
    }

    drawRotatedRect(x, y, angle, p5)
    drawRotatedRect(x + drawDist, y, angle, p5)
    drawRotatedRect(x - drawDist, y, angle, p5)
    drawRotatedRect(x, y + drawDist, angle, p5)
    drawRotatedRect(x, y - drawDist, angle, p5)
    drawRotatedRect(x + drawDist, y + drawDist, angle, p5)
    drawRotatedRect(x - drawDist, y - drawDist, angle, p5)
    drawRotatedRect(x + drawDist, y - drawDist, angle, p5)
    drawRotatedRect(x - drawDist, y + drawDist, angle, p5)
  }

  return (
    <div className='w-screen h-screen bg-black cursor-none'>
      <Sketch setup={setup} draw={draw} />
      {/* <div className="absolute top-10 left-10 text-white">
        {timeInSeconds}
      </div> */}
    </div>
  )
}

Sines.displayName = 'Sines'

export default Sines
