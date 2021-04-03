import React, { useEffect } from 'react'
import GameDetail from '../components/GameDetail'

// * Redux
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../redux/actions/gamesActions'
import { loadTV } from '../redux/actions/tvActions'

// * Components
import Game from '../components/Game'

// * Styling and Animation
import styled from 'styled-components'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { fadeIn, popUp } from '../animations'

const Home = () => {
  // Get the current location
  const location = useLocation()
  const pathID = location.pathname.split('/')[2]

  // Fetch Games
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
    dispatch(loadTV())
  }, [dispatch])

  // Get back data
  const { newGames, popular, upcoming, searched } = useSelector(
    (state) => state.games
  )
  const { searchOMDB } = useSelector((state) => state.tv)
  // console.log(searchOMDB)
  return (
    <GameList variant={fadeIn} initial='hidden' animate='show'>
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
          {pathID && <GameDetail pathID={pathID} />}
        </AnimatePresence>
        {searched.length ? (
          <div className='searched'>
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  key={game.id}
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
          </div>
        ) : (
          ''
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              key={game.id}
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
              clip={game.clip}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
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
{
  /* <video playsinline="" loop="" preload="auto" poster="https://media.rawg.io/media/games/0c5/0c5c311d20379703bdc1e8126c1d798e.jpg" src="https://media.rawg.io/media/stories-640/956/956ee53c49320e6aaa3df0ad6875b510.mp4" style="transform-origin: 48.1928% 95.1065% 0px; opacity: 0; visibility: visible; transform: translate3d(0px, 0px, 0px) scale(0.801052, 0.527141);"></video> */
}
