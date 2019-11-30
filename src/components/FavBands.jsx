import React from 'react'
import data from './data/bands.json'

const bandsFormat = props => {
  const favBands = data.categories.filter(item => {
    return item.category === props.match.params.category
  })[0]
  return (
    <section className={props.match.params.category}>
      {favBands.music.map(band => {
        return (
          <div>
            <header className="bandName">{band.title} </header>
            <img src={band.image} alt="" />
            <p>{band.album}</p>
          </div>
        )
      })}
    </section>
  )
}
export default bandsFormat
