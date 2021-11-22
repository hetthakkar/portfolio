import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import { NavBar } from '../components/Navbar'
import { TextContainer } from '../components/TextContainer'
import Link from 'next/link'

export async function getStaticProps() {
  // @ts-ignore
  const { config } = await import(`../common/config`)

  return {
    props: { ...config },
  }
}

export interface IndexPageProps {
  firstName: string
  lastName: string
  title: string
}

const Home: NextPage<IndexPageProps> = (props) => {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className='flex flex-col justify-center px-8'>
        <NavBar firstName={props.firstName} lastName={props.lastName} />
        <div className='mt-8 flex justify-start items-start w-full max-w-2xl mx-auto'>
          <div className="cursor-pointer">
            <Link href='/'>
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
            <h1 className='text-gray-300 text-5xl font-semibold'>
              {props.firstName} {props.lastName}
            </h1>
            <h2 className='mt-2 mb-24 text-gray-400 text-lg font-thin'>
              Software engineer and masters student at NC State
            </h2>
          </div>
        </div>
        <TextContainer>
          <div>
            <div className='text-gray-300 text-2xl font-normal'>About Me</div>
            <div className='mt-4 text-gray-400 text-lg font-thin'>
              I love exploring new technologies and building things that people
              would enjoy. I have experience working with technologies like
              Serverless, Typescript, React and Vue and am constantly working to
              add more to this list
            </div>
            <div className='mt-4 text-gray-400 text-lg font-thin'>
              Apart from web development, I like riding around on my bike,
              working out, making latte art, reading science fiction and fantasy
              books, and listening to waay too much trance and progressive music
            </div>
          </div>
        </TextContainer>
      </div>
    </Layout>
  )
}

export default Home
