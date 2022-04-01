import { IBaseProps } from '../../common/interfaces'
import { NextPage } from 'next'
import { BookCard } from '../../components/BookCard'
import { Container } from '../../components/Container'
import bookCover from '../../public/children.jpg'
import Link from 'next/link'
import Image from 'next/image'
import waves from '../../public/waves.png'
const Misc: NextPage<IBaseProps> = (props: IBaseProps) => {
  return (
    <Container
      head={{
        title: 'Misc | Het Thakkar',
        description:
          'Miscellaneous information about Het Thakkar like reading lists, music and playlists',
      }}
    >
      <h1 className='content-box text-white font-bold text-4xl mb-10 mt-8'>
        Currently Reading
      </h1>
      <div className='flex flex-col justify-center items-center flex-wrap w-full max-w-2xl mx-auto'>
        <BookCard
          title='Children of Dune'
          author='Frank Herbert'
          description='Dune Messiah set up a super interesting world, excited to see where this book goes even more excited to see how this gets adapted into a movie.'
          cover={bookCover}
          coverWidth={250}
          coverHeight={380}
          className='mb-8 md:max-h-44'
        />
      </div>
      <div className='content-box text-white font-bold text-4xl mb-10 mt-8'>
        Check out my generative art
      </div>
      <div className='w-full max-w-2xl mx-auto flex md:flex-col overflow-hidden justify-start items-center'>
        <div className='flex flex-col justify-center items-center bg-grayLight rounded-lg'>
          <Link href="/misc/waves">
            <a>
              <Image
                src={waves}
                alt='Waves artwork'
                width={300}
                height={280}
              />
            </a>
          </Link>
          <p className='text-white px-4 pb-2 pt-1'
          >Waves🌊</p>
        </div>
      </div>
      <div className='content-box text-white font-bold text-4xl mb-10 mt-8'>
        What I&apos;m vibing to right now
      </div>
      <div className='w-full max-w-2xl mx-auto flex md:flex-col overflow-hidden justify-start items-start'>
        <iframe
          className='w-full'
          height='315'
          src='https://www.youtube.com/embed/QM7L27N8-rE'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      <div className='content-box text-white mb-4 p-2 md:p-4 rounded-b-lg bg-grayLight flex flex-col'>
        <span className=' font-normal text-2xl'>
          Anjunadeep 13 - Mixed by Jody Wisternoff & James Grant (Live from Lake
          Skadar, Montenegro)
        </span>
        <span className='font-thin text-base mt-2 leading-5'>
          What&apos;s better than one of the best deep albums ever to be
          released? The best deep album played by James Grant and Jody
          Wisternoff(Who I met recently🤯) at the top of a lake in Montenegro.
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
