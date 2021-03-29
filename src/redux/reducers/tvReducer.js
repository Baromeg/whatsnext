const initState = {
  topMovies: [],
  topTVSeries: [],
}

const tvReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_TV':
      return {
        ...state,
        topMovies: action.payload.topMovies,
        topTVSeries: action.payload.topTVSeries
      }
    default:
      return { ...state }
  }
}

export default tvReducer
