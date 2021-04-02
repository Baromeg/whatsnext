import React from 'react'

// * Components and Pages
import Home from './pages/Home'
import Navbar from './components/Navbar'

// * Styles
import GlobalStyles from './components/GlobalStyles'

// * Router
import { Route } from 'react-router-dom'

require('dotenv').config()

function App() {
  return (
    <div className='app'>
      <GlobalStyles />
      <Navbar></Navbar>
      <Route path={['/gmae/:id', '/']}>
        <Home />
      </Route>
    </div>
  )
}

export default App
