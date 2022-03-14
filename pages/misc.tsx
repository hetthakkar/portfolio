import { IBaseProps } from '../common/interfaces'
import { NextPage } from 'next'
import { BookCard } from '../components/BookCard'
import { Container } from '../components/Container'
import bookCover from '../public/tales.jpg'
const Misc: NextPage<IBaseProps> = (props: IBaseProps) => {
  return (
    <Container
      head={{
        title: 'Misc | Het Thakkar',
        description:
          'Miscellaneous information about Het Thakkar like reading lists, music and playlists. Currently reading Bloodcurdling Tales of Horror and the Macabre',
      }}
    >
      <h1 className='content-box text-white font-bold text-4xl mb-10 mt-8'>
        Currently Reading
      </h1>
      <div className='flex flex-col justify-center items-center flex-wrap w-full max-w-2xl mx-auto'>
        <BookCard
          title='Bloodcurdling Tales of Horror and the Macabre'
          author='H. P. Lovecraft'
          description='Regardless of the views of the author, I really enjoyed a few stories I have read of H.P. Lovecraft. Looking forward to reading some great horror stories'
          cover={bookCover}
          coverWidth={300}
          coverHeight={500}
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
          src='https://www.youtube.com/embed/0p0DTgH6GjQ'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      <div className='content-box text-white mb-4 p-2 md:p-4 rounded-b-lg bg-grayLight flex flex-col'>
        <span className=' font-normal text-2xl'>
          Romain Garcia - Before You Go EP (Live)
        </span>
        <span className='font-thin text-base mt-2 leading-5'>
          This EP is just perfect. It&apos;s exactly the kind of music I love to
          hear and it hits just the right spot
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
