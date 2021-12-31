import type { NextPage } from 'next'
import Image from 'next/image'
import { TextContainer } from '../components/TextContainer'
import Link from 'next/link'
import { Container } from '../components/Container'
import ProfilePicture from '../public/profile.png'

const Home: NextPage = () => {
  return (
    <Container head={{ canonical: 'https://hetthakkar.me' }}>
      <div className='md:mt-8 flex flex-col items-center sm:flex-row sm:items-start justify-start w-full max-w-2xl mx-auto'>
        <div className='cursor-pointer'>
          <Link href='/' passHref={true}>
            <a>
              <Image
                alt='Het Thakkar'
                height={105}
                width={105}
                src={ProfilePicture}
                placeholder='empty'
                className='rounded-full'
              />
            </a>
          </Link>
        </div>
        <div className='flex flex-col items-start ml-8'>
          <h1 className='text-gray-300 text-5xl font-semibold'>Het Thakkar</h1>
          <h2 className='mt-2 mb-16 md:mb-24 text-gray-400 text-lg font-thin'>
            Software engineer and masters student at NC State
          </h2>
        </div>
      </div>
      <TextContainer className='mb-8'>
        <div>
          <div className='card-title'>About Me</div>
          <div className='mt-4 card-text'>
            I am a software developer and grad student. I spend most of my time
            feeling overwhelmed by the list of stuff I want to read and learn about.
            I like exploring new places on my bike, making latte art, reading
            science fiction and fantasy books, and listening to a lot of trance
            and progressive music.
          </div>
        </div>
      </TextContainer>
    </Container>
  )
}

export default Home
