import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducer/UserReducer';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, UserReducer);

// export default configureStore({
//   reducer: {
//     user: UserReducer
//   },
// });

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store)