// import axios from 'axios';

const SET_SINGLE = 'SET_SINGLE';

const setSingle = (sneak) => ({
	type: SET_SINGLE,
	sneak,
});

export const fetchSingleSneak = (styleId) => {
  return async (dispatch) => {
    try {
      // const { data } = await axios.get(
			// 	`http://sneaks-api.azurewebsites.net/id/${styleId}/prices`
      // );
      dispatch(setSingle(styleId))
    } catch (error) {
      console.log(error)
    }
  }
}

const sneakerReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SINGLE:
      return action.sneak
    default:
      return state
  }
}

export default sneakerReducer
