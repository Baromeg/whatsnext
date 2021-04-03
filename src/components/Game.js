import React from 'react'

// * Styling and Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { fadeIn, popUp } from '../animations'

// * Redux
import { useDispatch } from 'react-redux'
import { loadDetail } from '../redux/actions/detailAction'
import { Link } from 'react-router-dom'
import { smallImage } from '../util'

const Game = ({ name, released, image, id }) => {
  const stringPathID = id.toString()
  // Load detail Handler
  const dispatch = useDispatch()
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden'
    dispatch(loadDetail(id))
  }
  return (
    <StyledGame
      variants={popUp}
      initial='hidden'
      animate='show'
      layoutId={stringPathID}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathID}`}>{name}</motion.h3>
        <p>{released}</p>
        {/* <video src={clip.clip}></video> */}
        <motion.img
          layoutId={`image ${stringPathID}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`
export default Game
