import React from 'react'

// * Components and Pages
import Home from './pages/Home'
import GlobalStyles from './components/GlobalStyles'

require('dotenv').config()

function App() {
  return (
    <div className='app'>
      <GlobalStyles />
      {/* <h1>Hello What's Next!</h1> */}
      <Home />
    </div>
  )
}

export default App
