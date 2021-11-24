import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import { NavBar } from '../components/Navbar'
import { TextContainer } from '../components/TextContainer'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <div className='md:mt-8 flex flex-col items-center sm:flex-row sm:items-start justify-start w-full max-w-2xl mx-auto'>
        <div className='cursor-pointer'>
          <Link href='/' passHref={true}>
            <Image
              alt='Het Thakkar'
              height={105}
              width={105}
              src='/jet.png'
              className='rounded-full'
            />
          </Link>
        </div>
        <div className='flex flex-col items-start ml-8'>
          <h1 className='text-gray-300 text-5xl font-semibold'>Het Thakkar</h1>
          <h2 className='mt-2 mb-16 md:mb-24 text-gray-400 text-lg font-thin'>
            Software engineer and masters student at NC State
          </h2>
        </div>
      </div>
      <TextContainer className="mb-8">
        <div>
          <div className='card-title'>About Me</div>
          <div className='mt-4 card-text'>
            I love exploring new technologies and building things that people
            would enjoy. I have experience working with technologies like
            Serverless, React, Vue, OpenMP, CUDA Toolkit, and am constantly working to
            add more to this list
          </div>
          <div className='mt-4 card-text'>
            Apart from web development, I like riding around on my bike, working
            out, making latte art, reading science fiction and fantasy books,
            and listening to waay too much trance and progressive music
          </div>
        </div>
      </TextContainer>
    </div>
  )
}

export default Home
