import React from 'react'
import Head from 'next/head'
import { NavBar } from './Navbar'
import TwitterIcon from './icons/TwitterIcon'
import GithubIcon from './icons/GithubIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import SpotifyIcon from './icons/SpotifyIcon'
import Link from 'next/link'
import InstagramIcon from './icons/InstagramIcon'

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-grayLight to-grayDark'>
      <div className='page min-h-screen'>
        <NavBar />
        <span id='current-page'>{children}</span>
        <footer className='flex flex-grow items-end justify-center mt-auto gap-2'>
          <TwitterIcon
            className='footer-icon '
            href='https://twitter.com/thakkarhet'
          />
          <GithubIcon
            className='footer-icon'
            href='https://github.com/hetthakkar'
          />
          <LinkedInIcon
            className='footer-icon'
            href='https://www.linkedin.com/in/het-thakkar-3a7534125/'
          />
          <SpotifyIcon
            className='footer-icon'
            href='https://open.spotify.com/user/het.thakkar809'
          />
          <InstagramIcon 
            className='footer-icon'
            href='https://www.instagram.com/thakkar.het/'
          />
        </footer>
      </div>
    </div>
  )
}
