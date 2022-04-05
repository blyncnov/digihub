import React, {useEffect} from 'react';
import Head from 'next/head'

import Navigation from "../components/Navigation"
import HeroIntro from "../components/HeroIntro"
import AboutFoundation from "../components/AboutFoundation"
import FoundationAttribute from "../components/FoundationAttribute"

export default function Home() {

  useEffect(() => {
      alert("Welcome to Digi Hub \n \n Welcome to this great experience \n \n legoooo!!!!!!!!!!!!! 😘😘")
  }, [])
  
  const DonateFunction = async () => {
    ethereum.request({ method: "eth_requestAccounts" });
  }

  return (
    < >
      <Head>
        <title>DigiHub - Home of greater experience</title>
        <meta name="description" content="DigiHub Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation Donate={DonateFunction }/>
      <HeroIntro Donate={DonateFunction }/>
      <AboutFoundation/>
     <FoundationAttribute/>
    </>
  )
}
