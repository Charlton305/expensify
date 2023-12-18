import React from 'react'
import ReactDOM from 'react-dom/client'
import "./firebase/firebase.js"
import AppRoutes from './routers/AppRoutes.jsx'
import configureStore from './store/configureStore.js'
import { Provider } from 'react-redux'
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { startSetExpenses } from './reducers/expenses.js'
import { BrowserRouter } from 'react-router-dom'
import './actions/auth.js'
import { auth } from './firebase/firebase.js'
import { login, logout } from './reducers/auth.js'

const store = configureStore()
const root = ReactDOM.createRoot(document.getElementById('root'))

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    root.render(jsx)
  }
};

root.render(<p>Loading...</p>)

auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      hasRendered = true;
    })
  } else {
    store.dispatch(logout())
    renderApp()
    hasRendered = false
  }
})

