import { NextPage } from 'next'
import { IBaseProps } from '../common/interfaces'
import { TextContainer } from '../components/TextContainer'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../components/Container'

const Projects: NextPage<IBaseProps> = (props: IBaseProps) => {
  return (
    <Container
      head={{
        title: 'Projects | Het Thakkar',
        description:
          'Some cool projects Het Thakkar has done recently including a mobile game, a ML project to find certain landmarks in a brain MRI and a serverless application for creating online polls.',
      }}
    >
      <div className='content-box text-white font-bold text-4xl mb-10 mt-8'>
        Projects
      </div>
      <TextContainer className='mb-8'>
        <Link href='https://judgementcard.games/download' passHref={true}>
          <div className='card-title flex justify-start items-center cursor-pointer'>
            <div className='hidden md:flex justify-center items-end'>
              <Image
                src='/kachuful_icon.png'
                alt='Kachuful Judgement Multiplayer'
                height={30}
                width={30}
                className='rounded-lg'
              />
            </div>
            <div className='md:ml-2 link'>Kachuful Judgement Multiplayer</div>
          </div>
        </Link>
        <div>
          <div className='card-text mt-4'>
            A cross platform multiplayer card game written in Flutter and
            available on both iOS and Android.
            <br />
            Kachuful is a traditional Indian card game with variants of it
            existing all across the world. It is best played with friends and
            family, however, with the pandemic, this was a little difficult. My
            cousin <a className='link' target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/savanthakkar/">Savan</a> and I missed playing this game with the family, decided
            to make a virtual substitute while in quarantine. A lot of people
            resonated with the idea with the game gaining quite a bit of
            popularity with many feature requests positive feedback from the
            community pouring in. It is available for download{' '}
            <Link href='https://judgementcard.games/download'>
              <a target='_blank' className='link'>
                here
              </a>
            </Link>
          </div>
        </div>
      </TextContainer>
      <TextContainer className='mb-8'>
        <div className='card-title flex justify-start items-center'>
          <div>
            <div>
              Automatic detection and localization of various landmarks in head
              MRI images
            </div>
          </div>
        </div>
        <div>
          <div className='card-text mt-4'>
            A system that uses Deep Learning models like image processing to
            label important landmarks in an MRI image like eyes, anterior
            commissure, posterior commissure, and the median plane. Performed as
            part of B.Tech. project and won the B.Tech. project award
          </div>
        </div>
      </TextContainer>
      <TextContainer className='mb-8'>
        <div className='card-title flex justify-start items-center'>
          <div>
            <Link href='https://github.com/hetthakkar/polly/' passHref={true}>
              <div className='link cursor-pointer'>
                Poll Me, a scalable web polling application
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className='card-text mt-4'>
            Built as a part of Project 1 of the course CSC510 at NCSU, this web
            application(with a Serverless backend and a React frontend) allows
            users to create polls and others to join in and cast their votes.
            The application was built with scalability in mind. The source can
            be found{' '}
            <Link href='https://github.com/hetthakkar/polly/'>
              <a className='link'>here</a>
            </Link>
          </div>
        </div>
      </TextContainer>
    </Container>
  )
}

export default Projects
