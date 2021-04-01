import React from 'react'

// * Components and Pages
import Home from './pages/home'

require('dotenv').config()

function App() {
  return (
    <div className='App'>
      {/* <h1>Hello What's Next!</h1> */}
      <Home />
    </div>
  )
}

export default App
