import React from 'react'

// * Styling and Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'

// * Redux
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { smallImage } from '../util'

// * Images
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'

const GameDetail = ({ pathID }) => {
  const history = useHistory()
  // Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto'
      history.push('/')
    }
    console.log(element)
  }

  // Get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case 'Playstation 4':
        return playstation
      case 'PC':
        return steam
      case 'Xbox One':
        return xbox
      case 'Nintendo Switch':
        return nintendo
      case 'iOS':
        return apple
      default:
        return gamepad
    }
  }

  // Data
  const { screen, game, isLoading } = useSelector((state) => state.detail)
  return (
    <>
      {!isLoading && (
        <CardShadowStyled className='shadow' onClick={exitDetailHandler}>
          <DetailStyled layoutId={pathID}>
            <StatsStyled>
              <RatingStyled>
                <motion.h3 layoutId={`title ${pathID}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </RatingStyled>
              <InfoStyled>
                <h3>Platforms</h3>
                <PlatformsStyled>
                  {game.platforms &&
                    game.platforms.map((data, i) => (
                      <img
                        key={i}
                        alt={data.platform.name}
                        src={getPlatform(data.platform.name)}
                      ></img>
                    ))}
                </PlatformsStyled>
              </InfoStyled>
            </StatsStyled>
            <MediaStyled>
              <motion.img
                layoutId={`image ${pathID}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.name}
              />
            </MediaStyled>
            <DescriptionStyled>
              <p>{game.description_raw}</p>
            </DescriptionStyled>
            <div className='gallery'>
              {screen.results &&
                screen.results.map((screen, i) => (
                  <img
                    src={smallImage(screen.image, 1280)}
                    key={i}
                    alt={game.name}
                  />
                ))}
            </div>
          </DetailStyled>
        </CardShadowStyled>
      )}
    </>
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
  z-index: 1000;
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
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`

const StatsStyled = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const RatingStyled = styled(motion.div)``

const InfoStyled = styled(motion.div)`
  text-align: center;
`

const PlatformsStyled = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`

const MediaStyled = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`

const DescriptionStyled = styled(motion.div)`
  padding: 5rem 0rem;
`

export default GameDetail
