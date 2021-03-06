import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <>
      <main>
        <div className="beatles">
          <h1>The Beatles</h1>
          <p>
            What need I say? Probably the most iconic band of all time. Formed
            in the 60's, in Liverpool, The Beatles quickly rose to global fame.
            Click <Link to="/beatles">Here</Link> to find out more
          </p>
        </div>
        <div className="coldPlay">
          <h1>Coldplay</h1>
          <p>
            Another iconic modern British band, known for classics such as "Fix
            You" and "Yellow". Click <Link to="/coldplay">Here</Link> to find
            out more
          </p>
        </div>
        <div className="greenDay">
          <h1>Greenday</h1>
          <p>
            A band that rose to fame in the early 2000s with their controversial
            album "American Idiot". Click <Link to="/greenday">Here</Link> to
            find out more.{' '}
          </p>
        </div>
      </main>
    </>
  )
}

export default HomePage
