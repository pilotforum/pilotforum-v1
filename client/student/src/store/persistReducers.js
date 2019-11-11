import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  return persistReducer({
    key: 'pilotforum',
    storage,
    whitelist: ['auth', 'user']
  }, reducers);
}
