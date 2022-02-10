import { combineReducers } from 'redux';

import general from "./general/reducer"
import notification from "./notification/reducer"

export default combineReducers({
  general,
  notification
});
