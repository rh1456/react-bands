import React from 'react'
import beatles from './images/theBeatles.jpeg'

const TheBeatles = () => {
  return (
    <main>
      <h1>The Beatles</h1>
      <img src={beatles} alt="The Beatles Band members" />
      <h2>Latest Album</h2>
      <p>
        Controversial topic, much debate over whether Abbey Road or Let It Be
        should be considered their final album together
      </p>
    </main>
  )
}

export default TheBeatles
