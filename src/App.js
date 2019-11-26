import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Greenday from './components/Greenday'
import Coldplay from './components/coldplay'
import TheBeatles from './components/TheBeatles'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/beatles" component={TheBeatles}></Route>
          <Route exact path="/coldplay" component={Coldplay}></Route>
          <Route exact path="/greenday" component={Greenday}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
