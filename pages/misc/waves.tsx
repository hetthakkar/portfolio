import { NextPage } from 'next'
import p5Types from 'p5'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

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
  return Math.abs(Math.sin((currentPosition * Math.PI) / 2)) * Math.PI
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

const Waves: NextPage = () => {
  let [m, setM] = useState<number>(15)
  let [n, setN] = useState<number>(15)
  let [angleDelay, setAngleDelay] = useState<number>(0.14)
  let [rectangleWidth, setRectangleWidth] = useState<number>(2)
  let [rectangleHeight, setRectangleHeight] = useState<number>(45)
  let [xPhaseMultiplier, setXPhaseMultiplier] = useState<number>(3)
  let [yPhaseMultiplier, setYPhaseMultiplier] = useState<number>(3)
  let [animationDuration, setAnimationDuration] = useState<number>(1.4)
  let [gap, setGap] = useState<number>(20)
  let [flipX, setFlipX] = useState<boolean>(false)
  let [flipY, setFlipY] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    router.query.m &&
      !(router.query.m instanceof Array) &&
      setM(parseInt(router.query.m))
    router.query.n &&
      !(router.query.n instanceof Array) &&
      setN(parseInt(router.query.n))
    router.query.angleDelay &&
      !(router.query.angleDelay instanceof Array) &&
      setAngleDelay(parseFloat(router.query.angleDelay))
    router.query.rectangleWidth &&
      !(router.query.rectangleWidth instanceof Array) &&
      setRectangleWidth(parseInt(router.query.rectangleWidth))
    router.query.rectangleHeight &&
      !(router.query.rectangleHeight instanceof Array) &&
      setRectangleHeight(parseInt(router.query.rectangleHeight))
    router.query.xPhaseMultiplier &&
      !(router.query.xPhaseMultiplier instanceof Array) &&
      setXPhaseMultiplier(parseInt(router.query.xPhaseMultiplier))
    router.query.yPhaseMultiplier &&
      !(router.query.yPhaseMultiplier instanceof Array) &&
      setYPhaseMultiplier(parseInt(router.query.yPhaseMultiplier))
    router.query.animationDuration &&
      !(router.query.animationDuration instanceof Array) &&
      setAnimationDuration(parseFloat(router.query.animationDuration))
    router.query.gap &&
      !(router.query.gap instanceof Array) &&
      setGap(parseInt(router.query.gap))
    router.query.flipX &&
      !(router.query.flipX instanceof Array) &&
      setFlipX(router.query.flipX === 'true')
    router.query.flipY &&
      !(router.query.flipY instanceof Array) &&
      setFlipY(router.query.flipY === 'true')
  }, [router.isReady])

  useEffect(() => {
    // Change value of query param m in uri
    router.replace(
      `/misc/waves?m=${m}&n=${n}&angleDelay=${angleDelay}&rectangleWidth=${rectangleWidth}&rectangleHeight=${rectangleHeight}&xPhaseMultiplier=${xPhaseMultiplier}&yPhaseMultiplier=${yPhaseMultiplier}&animationDuration=${animationDuration}&gap=${gap}&flipX=${flipX}&flipY=${flipY}`
    )
  }, [
    m,
    n,
    angleDelay,
    rectangleWidth,
    rectangleHeight,
    xPhaseMultiplier,
    yPhaseMultiplier,
    animationDuration,
    gap,
    flipX,
    flipY,
  ])

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight - 200).parent(
      canvasParentRef
    )
    p5.background(0)
    p5.stroke(255)
    p5.strokeWeight(2)
    p5.frameRate(frameRate)
  }

  const draw = (p5: p5Types) => {
    p5.background(0)

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
          (flipX ? m - x : x) * xPhaseMultiplier +
            (flipY ? n - y : y) * yPhaseMultiplier,
          angleDelay
        )
      }
    }
  }

  return (
    <div className='w-screen h-screen bg-black flex flex-col justify-center items-center'>
      <Head>
        <title>Waves generative animation</title>
        <meta
          name='description'
          content='Waves generative animation made with p5.js'
        />
        <meta
          name='keywords'
          content='Waves, generative, animation, p5.js, processing, javascript'
        />
        <meta name='image' content='https://hetthakkar.me/waves.png' />
        <meta property='og:title' content='Waves generative animation' />
        <meta
          property='og:description'
          content='Waves generative animation made with p5.js'
        />
        <meta property='og:image' content='https://hetthakkar.me/waves.png' />
        <meta property='og:url' content='https://hetthakkar.me/misc/waves' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content='Waves generative animation' />
        <meta
          property='twitter:description'
          content='Waves generative animation made with p5.js'
        />
        <meta
          property='twitter:image'
          content='https://hetthakkar.me/waves.png'
        />
      </Head>
      <Sketch setup={setup} draw={draw} />
      <div className='flex gap-4'>
        {/* Add home image button */}
        <Link href="/">
          <a className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5 mt-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              style={{ fill: 'white' }}
            >
              <path d='M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z'></path>
            </svg>
          </a>
        </Link>
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
        <button
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5 mt-5'
          onClick={() => {
            // Share current url
            navigator.share({
              url: window.location.href,
            })
          }}
        >
          Share
        </button>
      </div>
    </div>
  )
}

Waves.displayName = 'Waves'

export default Waves
