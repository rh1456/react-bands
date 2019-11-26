import React from 'react'
import coldplay from './images/coldplay.jpg'

const Coldplay = () => {
  return (
    <section className="bands">
      {/* <div className="coldplayDiv"> */}
      <h1>Coldplay</h1>
      <img className="coldplayPic" src={coldplay} alt="Coldplay Band Members" />
      <h2>Latest Album</h2>
      <p>Their most recent album is Everyday Life, debuted in 2019</p>
      {/* </div> */}
    </section>
  )
}

export default Coldplay
