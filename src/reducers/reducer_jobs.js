import {FETCH_JOBS} from '../actions/index';

const INITIAL_STATE = { all: [], job: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_JOBS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
