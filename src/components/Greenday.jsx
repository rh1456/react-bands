import React from 'react'
import GreendayPic from './images/americanidiot.jpg'

const Greenday = () => {
  return (
    <div>
      <img
        className="greendayPic"
        src={GreendayPic}
        alt="Coldplay Band Members"
      />
      <h2>Latest Album</h2>
      <p>
        Greenday has announced a new album debuting in 2020, called Father of
        All Motherf****ers
      </p>
    </div>
  )
}

export default Greenday
