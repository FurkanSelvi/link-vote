import { SET_NOTIFICATION } from "./types";

export default function reducer(state = null, action) {
  switch (action.type) {
    case SET_NOTIFICATION:
      return action.payload;
    default:
      return state;
  }
}
