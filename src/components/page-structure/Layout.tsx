import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import Head from 'next/head'

type LayoutProps = {
    children: React.ReactNode,
};

function Layout({ children }:LayoutProps) {
  return (
    <>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navigation />
        <main>{children}</main>
    <Footer />
    </>
  )
}

export default Layout