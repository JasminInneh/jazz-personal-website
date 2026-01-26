import React from 'react'
import Hero from '../components/Hero'
import Articles from '../components/Articles'
import Apps from '../components/Apps'
import ContentCreation from '../components/ContentCreation'
import PublicSpeaking from '../components/PublicSpeaking'

function Home() {
  return (
    <>
      <Hero />
      <Articles />
      <Apps />
      <ContentCreation />
      <PublicSpeaking />
    </>
  )
}

export default Home
