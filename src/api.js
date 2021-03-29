// require('dotenv').config()

// Base URL
const base_url_movies = 'https://imdb-api.com/en/API/'
const base_url_games = 'https://api.rawg.io/api/'
// Getting the date
const currentYear = new Date().getFullYear()
const currentMonth = String(new Date().getMonth() + 1).padStart(2, '0')
const currentDay = String(new Date().getDate()).padStart(2, '0')
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`
// require('dotenv').config()

const RAWG_KEY = process.env.REACT_APP_RAWG_KEY
const IMDB_KEY = process.env.REACT_APP_IMDB_KEY
// Top 250 Movies
const top250Movies = `Top250Movies/${IMDB_KEY}`

// Top 250 TV Series
const top250TVSeries = `Top250TVs/${IMDB_KEY}`

// Popular games
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=${RAWG_KEY}`

// Upcoming Games
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=${RAWG_KEY}`

// New Games
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&key=${RAWG_KEY}`

export const top250MoviesURL = () => `${base_url_movies}${top250Movies}`
export const top250TVSeriesURL = () => `${base_url_movies}${top250TVSeries}`

export const popularGamesURL = () => `${base_url_games}${popularGames}`
export const upcomingGamesURL = () => `${base_url_games}${upcomingGames}`
export const newGamesURL = () => `${base_url_games}${newGames}`
console.log(top250MoviesURL())
console.log(newGamesURL())
