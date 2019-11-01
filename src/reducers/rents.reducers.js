import { FETCH_RENTS } from '../actions';

let initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_RENTS:
      return [...state, ...action.payload]
    default:
      return state
  }
}