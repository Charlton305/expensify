import React from 'react'
import ReactDOM from 'react-dom/client'
import "./firebase/firebase.js"
import AppRoutes from './routers/AppRoutes.jsx'
import { history } from './helpers/history.js'
import configureStore from './store/configureStore.js'
import { Provider } from 'react-redux'
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { startSetExpenses } from './reducers/expenses.js'
// import { auth } from './actions/auth.js'
import { BrowserRouter } from 'react-router-dom'
import './actions/auth.js'

const store = configureStore()

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<p>Loading...</p>)

store.dispatch(startSetExpenses()).then(() => {
  root.render(jsx)
})

