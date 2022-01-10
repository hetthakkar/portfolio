import { IBaseProps } from '../common/interfaces'
import { NextPage } from 'next'
import { BookCard } from '../components/BookCard'
import { Container } from '../components/Container'
import DuneMessiahCover from '../public/dune_messiah_cover.jpg'
import RustInActionCover from '../public/rust_in_action_cover.png'
const Misc: NextPage<IBaseProps> = (props: IBaseProps) => {
  return (
    <Container
      head={{
        title: 'Misc | Het Thakkar',
        description:
          'Miscellaneous information about Het Thakkar like reading lists, music and playlists. Currently reading Dune Messiah, Rust In Action. ',
      }}
    >
      <h1 className='content-box text-white font-bold text-4xl mb-10 mt-8'>
        Currently Reading
      </h1>
      <div className='flex flex-col justify-center items-center flex-wrap w-full max-w-2xl mx-auto'>
        <BookCard
          title='Rust in Action'
          author='Tim McNamara'
          description='I went through the Rust book about a year ago without digesting much of it. Recently came across a few Rust evangelists recommending this on Twitter and started reading it. This book goes into the motivation behind a lot of the Rust features and makes you appreciate them. '
          cover={RustInActionCover}
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
          src='https://www.youtube.com/embed/MEzU1HvBo6Y'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      <div className='content-box text-white mb-4 p-2 md:p-4 rounded-b-lg bg-grayLight flex flex-col'>
        <span className=' font-normal text-2xl'>
          Above & Beyond in Guatape, Colombia for Cercle
        </span>
        <span className='font-thin text-base mt-2 leading-5'>
          Tony and Paavo from Above & Beyond play an incredible chill set on top of a mountain in Guatape, Colombia.
        </span>
      </div>
      <div className='content-box text-gray-200 mb-2 mt-10 text-2xl flex flex-col'>
        Here&apos;s a Spotify playlist I have been maintaining for the past few
        years with the latest dance music I really like
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
    </Container>
  )
}

export default Misc
