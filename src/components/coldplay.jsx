import React from 'react'
import coldplay from './images/coldplay.jpg'

const Coldplay = () => {
  return (
    <div>
      <img className="coldplayPic" src={coldplay} alt="Coldplay Band Members" />
      <h2>Latest Album</h2>
      <p>Their most recent album is Everyday Life, debuted in 2019</p>
    </div>
  )
}

export default Coldplay
