import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home'

function App() {
  enum Pages {
    Home,
    Room
  }

  const [Page, setPage] = useState(Pages.Home)



  function HandleJoin() {
    console.debug(`${Pages.Home}`)
    console.debug(`${Page}`)
  }

  switch(Page) {
      case Pages.Home:
        return(
          <Home/>
        )
      default:
        return(
          <Home/>
        )
  }

  return(
    <>
      <h1>Hello</h1>
      <button onClick={HandleJoin}>Join</button>
    </>
    
  )
}

export default App;
