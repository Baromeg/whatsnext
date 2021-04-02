import React from 'react'

// * Components and Pages
import Home from './pages/Home'
import GlobalStyles from './components/GlobalStyles'
import { Route } from 'react-router-dom'

require('dotenv').config()

function App() {
  return (
    <div className='app'>
      <GlobalStyles />
      <Route path={['/gmae/:id', '/']}>
        <Home />
      </Route>
    </div>
  )
}

export default App
