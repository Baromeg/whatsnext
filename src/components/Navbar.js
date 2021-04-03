import React, { useState } from 'react'

// * Styling and Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { fadeIn } from '../animations'

// Redux and Routes
import { fetchSearch } from '../redux/actions/gamesActions'
import { useDispatch } from 'react-redux'

import logo from '../img/logo.svg'

const Navbar = () => {
  const dispatch = useDispatch()
  const [textInput, setTextInput] = useState('')

  const inputHandler = (e) => {
    setTextInput(e.target.value)
  }

  const submitSearch = (e) => {
    e.preventDefault()
    dispatch(fetchSearch(textInput))
    setTextInput('')
  }

  const clearSearch = () => {
    dispatch({ type: 'CLEAR_SEARCHED' })
  }
  return (
    <NavStyled variants={fadeIn} initial='hidden' animate='show'>
      <LogoStyled onClick={clearSearch}>
        <h1>What's</h1>
        <img src={logo} alt='logo' />
        <h1>next?</h1>
      </LogoStyled>
      <form className='search'>
        <input value={textInput} onChange={inputHandler} type='text' />
        <button onClick={submitSearch} type='submit'>
          Search
        </button>
      </form>
    </NavStyled>
  )
}

const NavStyled = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7575;
    color: white;
  }
`

const LogoStyled = styled(motion.nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 4rem;
    width: 4rem;
  }
`

export default Navbar
