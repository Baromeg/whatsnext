// Base URL
const base_url_movies = 'https://imdb-api.com/en/API/'
const base_url_games = 'https://api.rawg.io/api/'
// Getting the date
const currentYear = new Date().getFullYear();
const currentMonth = String(new Date().getMonth() + 1).padStart(2, '0');
const currentDay = String(new Date().getDate()).padStart(2, '0');
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Top 250 Movies
const top250Movies = `Top250Movies/`
 
// Top games
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const top250MoviesURL = () => `${base_url_movies}${top250Movies}`
export const popularGamesURL = () => `${base_url_games}${popularGames}`
console.log(popularGamesURL());