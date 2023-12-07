import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routers/AppRoutes.jsx'
import configureStore from './store/configureStore.js'
import { Provider } from 'react-redux'
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore()

store.dispatch(addExpense({ description: "water bill", amount: 300 }))
store.dispatch(addExpense({ description: "gas bill", createdAt: 640023000000 }))
store.dispatch(addExpense({ description: "rent", amount: 5000 }))
console.log(store.getState())
const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState())
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>,
)
