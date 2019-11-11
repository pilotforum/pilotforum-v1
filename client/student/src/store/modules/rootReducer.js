import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import tags from './tags/reducer';

export default combineReducers({
  auth,
  user,
  tags,
});
