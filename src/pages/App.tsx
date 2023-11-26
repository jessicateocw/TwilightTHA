import React from 'react'
import Head from 'next/head';
import { AppBar, Home } from '@/component'

export const App = () => {
  return (
    <>
      <Head>
          <title>Twilight App</title>
          <meta name="description" content="Frontend Twilight app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
        <AppBar/>
        <Home/>
    </>
  )
}
