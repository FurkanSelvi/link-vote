import {
  SET_NOTIFICATION,
} from "./types";

export const setNotification = (payload = null) => ({
  type: SET_NOTIFICATION,
  payload,
});