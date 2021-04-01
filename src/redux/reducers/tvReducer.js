const initState = {
  // topMovies: [],
  // topTVSeries: [],
  searchOMDB: []
}

const tvReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_TV':
      return {
        ...state,
        // topMovies: action.payload.topMovies,
        // topTVSeries: action.payload.topTVSeries
        searchOMDB: action.payload.searchOMDB
      }
    default:
      return { ...state }
  }
}

export default tvReducer
