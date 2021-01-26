import axios from 'axios';
// const SneaksAPI = require('sneaks-api');
// const sneaks = new SneaksAPI();
// import sneaks from '../../server/sneakersDb';

const LOAD_RESULTS = 'LOAD_RESULTS';
const CLEAR_RESULTS = 'CLEAR_RESULTS'

const setResults = results => ({
  type: LOAD_RESULTS,
  results
})

const clearResults = () => ({
  type: CLEAR_RESULTS
})

export const fetchResults = (keyword) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
				`http://sneaks-api.azurewebsites.net/search/${keyword}`
      );
      dispatch(setResults(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const resetResults = () => {
  return async (dispatch) => {
    try {
      dispatch(clearResults())
    } catch (error) {
      console.log(error)
    }
  }
}

const initState = {
  results: []
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_RESULTS:
      return action.results
    case CLEAR_RESULTS:
      return initState
    default:
      return state;
  }
}


export default searchReducer;

