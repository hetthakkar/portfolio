import React from 'react'
import Head from 'next/head'
import { NavBar } from './Navbar'
import TwitterIcon from './icons/TwitterIcon'
import GithubIcon from './icons/GithubIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import SpotifyIcon from './icons/SpotifyIcon'
import Link from 'next/link'

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-grayLight to-grayDark'>
      <Head>
        {' '}
        <title>Het Thakkar</title>{' '}
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />{' '}
        <meta name='description' content='Het Thakkar' /> <html lang='en' />{' '}
      </Head>
      <div className='page min-h-screen'>
        <NavBar />
        <span id='current-page'>{children}</span>
        <div className='flex flex-grow items-end justify-center mt-auto'>
          <TwitterIcon
            className='fill-current text-gray-400 cursor-pointer '
            href='https://twitter.com/thakkarhet'
          />
          <GithubIcon
            className='fill-current text-gray-400 cursor-pointer ml-2'
            href='https://github.com/hetthakkar'
          />
          <LinkedInIcon
            className='fill-current text-gray-400 cursor-pointer ml-2'
            href='https://www.linkedin.com/in/het-thakkar-3a7534125/'
          />
          <SpotifyIcon
            className='fill-current text-gray-400 cursor-pointer ml-2'
            href='https://open.spotify.com/user/het.thakkar809'
          />
        </div>
      </div>
    </div>
  )
}
