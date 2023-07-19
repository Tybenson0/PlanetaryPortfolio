import { configureStore } from '@reduxjs/toolkit'
import eskerReducer from './esker'

export default configureStore({
  reducer: {
    esker: eskerReducer,
  }
});