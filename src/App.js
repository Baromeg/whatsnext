import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadGames } from './redux/actions/gamesActions'
import { loadTV } from './redux/actions/tvActions'
require('dotenv').config()

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
    dispatch(loadTV())
  })
  return (
    <div className='App'>
      <h1>Hello What's Next!</h1>
    </div>
  )
}

export default App
