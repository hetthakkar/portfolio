import { IBaseProps } from '../common/interfaces'
import { NextPage } from 'next'
import { BookCard } from '../components/BookCard'
import Head from 'next/head'
const Misc: NextPage<IBaseProps> = (props: IBaseProps) => {
  return (
    <main className=''>
      <Head>
        <title>Misc | Het Thakkar</title>
        <meta
          name='description'
          content='Miscellaneous information about Het Thakkar like reading lists, music and playlists. Currently reading Dune, Rust In Action. '
        />
      </Head>
      <h1 className='content-box text-white font-bold text-4xl mb-10 mt-8'>
        Currently Reading
      </h1>
      <div className='flex flex-col justify-center items-center flex-wrap w-full max-w-2xl mx-auto'>
        <BookCard
          title='Dune'
          author='Frank Herbert'
          description="Started reading Dune a few years ago but couldn't get into the story. Watching the movie got me back into the story and I am sold. The deep philosophy and complex world of Frank Herbert are incredibly captivating "
          cover='/dune_cover.png'
          className='mb-8 '
          coverWidth={300}
          coverHeight={450}
        />
        <BookCard
          title='Rust in Action'
          author='Tim McNamara'
          description='I went through the Rust book about a year ago without digesting much of it. Recently came across a few Rust evangelists recommending this on Twitter and started reading it. This book goes into the motivation behind a lot of the Rust features and makes you appreciate them. '
          cover='/rust_in_action_cover.png'
          coverWidth={415}
          coverHeight={519}
          className='mb-8 md:max-h-44'
        />
      </div>
      <div className='content-box text-white font-bold text-4xl mb-10 mt-8'>
        What I&apos;m vibing to right now
      </div>
      <div className='w-full max-w-2xl mx-auto flex md:flex-col overflow-hidden justify-start items-start'>
        <iframe
          className='w-full'
          height='315'
          src='https://www.youtube.com/embed/0sWn8UEbFR0'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      <div className='content-box text-white mb-4 p-2 rounded-b-lg bg-grayLight flex flex-col'>
        <span className=' font-normal text-2xl'>
          Deep Set 32 by Tony McGuinness from A&B
        </span>
        <span className='font-thin text-base mt-2 leading-5'>
          9 hours of pure bliss from some of the best deep artists out there,
          Tony, Marsh and Wassau. I couldn&apos;t catch this set live but have had
          the set on repeat for my workouts, bike rides and study sessions.
        </span>
      </div>
      <div className='content-box text-gray-200 mb-2 mt-10 text-2xl flex flex-col'>
        Here&apos;s a Spotify playlist I have been maintaining for the past few years
        with the latest dance music I really like
      </div>
      <div className='w-full max-w-2xl mx-auto flex md:flex-col overflow-hidden justify-start items-start mb-10'>
        <iframe
          src='https://open.spotify.com/embed/playlist/0mp422NtfcH1VpRnXE8nD1?utm_source=generator&theme=0'
          width='100%'
          height='380'
          frameBorder='0'
          allowFullScreen={false}
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        ></iframe>
      </div>
    </main>
  )
}

export default Misc
