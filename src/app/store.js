import { configureStore } from '@reduxjs/toolkit'
import eskerReducer from './esker'
import planetReducer from './planet'

export default configureStore({
  reducer: {
    esker: eskerReducer,
    planet: planetReducer
  }
});