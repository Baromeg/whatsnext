import axios from 'axios'
import {
  top250MoviesURL,
  top250TVSeriesURL
} from '../../api'

// * Action Creator

export const loadTV = () => async (dispatch) => {
  // * Fetch axios
  const top250MoviesData = await axios.get(top250MoviesURL())
  const top250TVSeriesData = await axios.get(top250TVSeriesURL())
  dispatch(
    {
      type: 'FETCH_TV',
      payload: {
        topMovies: top250MoviesData.data.items,
        topTVSeries: top250TVSeriesData.data.items
      }
    }
  )
}
