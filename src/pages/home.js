import React, { useEffect } from 'react'
import GameDetail from '../components/GameDetail'

// * Styling and Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'

// * Redux
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../redux/actions/gamesActions'
import { loadTV } from '../redux/actions/tvActions'

// * Components
import Game from '../components/Game'

const Home = () => {
  // Fetch Games
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
    dispatch(loadTV())
  }, [dispatch])

  // Get back data
  const { newGames, popular, upcoming } = useSelector((state) => state.games)
  const { searchOMDB } = useSelector((state) => state.tv)
  // console.log(searchOMDB)
  return (
    <GameList>
      <GameDetail />
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game, i) => (
          <Game
            key={i}
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
          />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game, i) => (
          <Game
            key={i}
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game, i) => (
          <Game
            key={i}
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
          />
        ))}
      </Games>
    </GameList>
  )
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`

const Games = styled(motion.div)`
  min-height: 80vh;
  /* display: flex;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`
export default Home
