import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './reducer/CounterReducer'

export default configureStore({
  reducer: {
    counter : counterReducer
  },
})