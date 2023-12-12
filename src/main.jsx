import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routers/AppRoutes.jsx'
import configureStore from './store/configureStore.js'
import { Provider } from 'react-redux'
import "./firebase/firebase.js"
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { startSetExpenses } from './reducers/expenses.js'

const store = configureStore()

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<p>Loading...</p>)

store.dispatch(startSetExpenses()).then(() => {
  root.render(jsx)
})