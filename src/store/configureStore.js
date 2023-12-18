import { createStore, combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import expensesReducer from "../reducers/expenses"
import filtersReducer from "../reducers/filters"
import authReducer from "../reducers/auth"

export default () => {
  const store = configureStore({
    reducer: {
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
  })
  return store
}
