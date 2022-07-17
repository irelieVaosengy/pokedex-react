import { configureStore } from '@reduxjs/toolkit';
import pokedexReducer from "./reducers/pokedex/pokedex.reducer";
import logger from 'redux-logger';

const reducer = {
  pokedexReducer: pokedexReducer
}

const preloadedState = {
}
const appStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
})
export default appStore
