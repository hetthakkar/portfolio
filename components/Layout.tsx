import React from 'react'
import Head from 'next/head'
import { NavBar } from './Navbar'
import TwitterIcon from './social/TwitterIcon'
import GithubIcon from './social/GithubIcon'
import LinkedInIcon from './social/LinkedInIcon'
import SpotifyIcon from './social/SpotifyIcon'
import Link from 'next/link'

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-grayLight to-grayDark'>
      <Head>
        {' '}
        <title>Het Thakkar</title>{' '}
      </Head>
      <div className='page'>
        <NavBar />
        <span id='current-page'>{children}</span>
        <div className='justify-self-end flex justify-center items-center mt-20'>
          <Link href='https://twitter.com/thakkarhet' passHref={true}>
            <TwitterIcon className='fill-current text-gray-400' />
          </Link>
          <Link href='https://github.com/hetthakkar' passHref={true}>
            <GithubIcon className='fill-current text-gray-400 ml-2' />
          </Link>
          <Link href='https://www.linkedin.com/in/het-thakkar-3a7534125/' passHref={true}>
            <LinkedInIcon className='fill-current text-gray-400 ml-2' />
          </Link>
          <Link href='https://open.spotify.com/user/het.thakkar809' passHref={true}>
            <SpotifyIcon className='fill-current text-gray-400 ml-2' />
          </Link>
        </div>
      </div>
    </div>
  )
}
