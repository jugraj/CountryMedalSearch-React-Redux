import { INVALID_SEARCH, RESET_SEARCH } from '../actions';

export default function (state = false, action) {
  switch (action.type) {
    case INVALID_SEARCH:
      return action.invalid;
    case RESET_SEARCH:
      return action.invalid;
  }
  return state;
}

