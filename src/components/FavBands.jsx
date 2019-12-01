import React from 'react'
import data from './data/bands.json'

const FavBands = props => {
  const bands = data.categories.filter(item => {
    return item.category === props.match.params.category
  })[0]
  // console.log(favBands)
  return (
    <div className={props.match.params.category}>
      <h1> This is the {bands.category} </h1>
      {bands.music.map(band => {
        return (
          <div>
            <header className="bandName">{band.title} </header>
            <img src={band.image} alt="" />
            <p>{band.album}</p>
          </div>
        )
      })}
    </div>
  )
}
export default FavBands
