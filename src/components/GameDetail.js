import React from 'react'

// * Styling and Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'

//Redux
import { useSelector } from 'react-redux'

const GameDetail = () => {
  // Data
  const { screen, game } = useSelector((state) => state.detail)
  return (
    <CardShadowStyled>
      <DetailStyled>
        <div className='stats'>
          <div className='rating'>
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className='info'>
            <h3>Platforms</h3>
            <div className='platforms'>
              {game.platforms &&
                game.platforms.map((data, i) => (
                  <h3 key={i}>{data.platform.name}</h3>
                ))}
            </div>
          </div>
        </div>
        <div className='media'>
          <img src={game.background_image} alt={game.name} />
        </div>
        <div className='description'>
          <p>{game.description_raw}</p>
        </div>
        <div className='gallery'>
          {screen.results &&
            screen.results.map((screen, i) => (
              <img src={screen.image} key={i} alt={game.name} />
            ))}
        </div>
      </DetailStyled>
    </CardShadowStyled>
  )
}
const CardShadowStyled = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`

const DetailStyled = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`

const StatsStyled = styled(motion.div)``
export default GameDetail
