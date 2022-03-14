import { NextPage } from 'next'
import p5Types from 'p5'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })

const frameRate = 60

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

const getRandomFloat = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}

const angle = (frameCount: number, animationDuration: number, delay = 0.65) => {
  let framesInAnimation = frameRate * animationDuration
  let currentPosition = (frameCount % framesInAnimation) / framesInAnimation
  if (currentPosition < delay) {
    return Math.PI
  } else {
    currentPosition = (currentPosition - delay) / (1 - delay)
  }
  return Math.abs(Math.sin((currentPosition * Math.PI ) / 2)) * Math.PI
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
  p5.push()
  p5.translate(x, y)
  p5.translate(width / 2, height / 2)
  p5.rotate(angle(p5.frameCount + delay, animationDuration, angleDelay))
  p5.translate(-width / 2, -height / 2)
  p5.rect(0, 0, width, height)
  p5.pop()
}

const Sines: NextPage = () => {
  console.log('Qp are', useRouter().query)
  let [m, setM] = useState<number>((useRouter().query.m && parseInt(useRouter().query.m)) || 15)
  let [n, setN] = useState<number>((useRouter().query.n && parseInt(useRouter().query.n)) || 15)
  let [angleDelay, setAngleDelay] = useState<number>((useRouter().query.angleDelay && parseFloat(useRouter().query.angleDelay)) || 0.14)
  let [rectangleWidth, setRectangleWidth] = useState<number>((useRouter().query.rectangleWidth && parseInt(useRouter().query.rectangleWidth)) || 2)
  let [rectangleHeight, setRectangleHeight] = useState<number>((useRouter().query.rectangleHeight && parseInt(useRouter().query.rectangleHeight)) || 45)
  let [xPhaseMultiplier, setXPhaseMultiplier] = useState<number>((useRouter().query.xPhaseMultiplier && parseInt(useRouter().query.xPhaseMultiplier)) || 3)
  let [yPhaseMultiplier, setYPhaseMultiplier] = useState<number>((useRouter().query.yPhaseMultiplier && parseInt(useRouter().query.yPhaseMultiplier)) || 3)
  let [animationDuration, setAnimationDuration] = useState<number>((useRouter().query.animationDuration && parseFloat(useRouter().query.animationDuration)) || 1.4)
  let [gap, setGap] = useState<number>((useRouter().query.gap && parseInt(useRouter().query.gap)) || 20)
  let [flipX, setFlipX] = useState<boolean>((useRouter().query.flipX && useRouter().query.flipX === 'true') || false)
  let [flipY, setFlipY] = useState<boolean>((useRouter().query.flipY && useRouter().query.flipY === 'true') || true)
  const router = useRouter()

  useEffect(() => {
    router.query.m && setM(parseInt(router.query.m))
    router.query.n && setN(parseInt(router.query.n))
    router.query.angleDelay && setAngleDelay(parseFloat(router.query.angleDelay))
    router.query.rectangleWidth && setRectangleWidth(parseInt(router.query.rectangleWidth))
    router.query.rectangleHeight && setRectangleHeight(parseInt(router.query.rectangleHeight))
    router.query.xPhaseMultiplier && setXPhaseMultiplier(parseInt(router.query.xPhaseMultiplier))
    router.query.yPhaseMultiplier && setYPhaseMultiplier(parseInt(router.query.yPhaseMultiplier))
    router.query.animationDuration && setAnimationDuration(parseFloat(router.query.animationDuration))
    router.query.gap && setGap(parseInt(router.query.gap))
    router.query.flipX && setFlipX(router.query.flipX === 'true')
    router.query.flipY && setFlipY(router.query.flipY === 'true')
  }, [router.isReady])

  useEffect(() => {
    // Change value of query param m in uri
    router.replace(`/art/sines?m=${m}&n=${n}&angleDelay=${angleDelay}&rectangleWidth=${rectangleWidth}&rectangleHeight=${rectangleHeight}&xPhaseMultiplier=${xPhaseMultiplier}&yPhaseMultiplier=${yPhaseMultiplier}&animationDuration=${animationDuration}&gap=${gap}&flipX=${flipX}&flipY=${flipY}`)
  }, [m, n, angleDelay, rectangleWidth, rectangleHeight, xPhaseMultiplier, yPhaseMultiplier, animationDuration, gap, flipX, flipY])


  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight - 200).parent(canvasParentRef)
    p5.background(0)
    p5.stroke(255)
    p5.strokeWeight(2)
    p5.frameRate(frameRate)
  }

  const draw = (p5: p5Types) => {
    p5.background(0)
    // Get mouse x, y

    // p5.textSize(20)
    // p5.text(angle(p5.frameCount, animationDuration), 50, 50)

    // let m = 8;
    // let n = 8;
    let xStart = p5.width / 2 - ((m - 1) * gap) / 2 - rectangleWidth / 2
    let yStart = p5.height / 2 - ((n - 1) * gap) / 2 - rectangleHeight / 2
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
          (flipX ? (m - x) : x) * xPhaseMultiplier + (flipY ? (n - y) : y) * yPhaseMultiplier,
          angleDelay
        )
      }
    }
  }

  return (
    <div className='w-screen h-screen bg-black flex flex-col justify-center items-center'>
      <Sketch setup={setup} draw={draw} />
      <div className="flex gap-4">
        <button
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5 mt-5'
          onClick={() => {
            setM(getRandomInt(5, 20))
            setN(getRandomInt(5, 20))
            setAngleDelay(getRandomFloat(0.1, 0.7))
            setRectangleWidth(getRandomInt(1, 6))
            setRectangleHeight(getRandomInt(30, 100))
            setXPhaseMultiplier(getRandomInt(1, 15))
            setYPhaseMultiplier(getRandomInt(1, 15))
            setAnimationDuration(getRandomFloat(0.5, 2))
            setFlipX(Math.random() > 0.5)
            setFlipY(Math.random() > 0.5)
            setGap(getRandomInt(10, 50))
          }}
        >
          Randomize
        </button>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5 mt-5'
          onClick={() => {
            // Share current url
            navigator.share({
              url: window.location.href,
            })
          }
          }
        >
          Share
        </button>
      </div>
    </div>
  )
}

Sines.displayName = 'Sines'

export default Sines
