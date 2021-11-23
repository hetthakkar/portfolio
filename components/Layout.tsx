import React from 'react'
import Head from 'next/head'
import { NavBar } from './Navbar'
export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-grayLight to-grayDark'>
      <Head>
        {' '}
        <title>Het Thakkar</title>{' '}
      </Head>
      <div className='page'>
        <NavBar />
        <span id="current-page">{children}</span>
      </div>
    </div>
  )
}
