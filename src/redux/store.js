import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import { mmkvStorage } from '@services/mmkvStorage';
import mainSlice from './slices/mainSlice';
import drawerSlice from "./slices/drawerSlice";

const persistConfig = {
  key: 'root',
  storage:mmkvStorage,
  whitelist:['main']
}

const rootReducer = combineReducers({
  main: mainSlice,
  drawer:drawerSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),logger],
});
export const persistor = persistStore(store)
