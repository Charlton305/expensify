 import { createStore, combineReducers } from "redux"
import expensesReducer from "../reducers/expenses"
import filtersReducer from "../reducers/filters"
import { configureStore } from "@reduxjs/toolkit"

// export default () => {
//     const store = createStore(
//         combineReducers({
//             expenses: expensesReducer,
//             filters: filtersReducer
//         }),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//         )
//     return store
// }

export default () => {
  const store = configureStore({
    reducer: {
      expenses: expensesReducer,
      filters: filtersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
  })
  return store
}
