import { FETCH_COUNTRY } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_COUNTRY:
      return [action.payload, ...state];
  }
  return state;
}
