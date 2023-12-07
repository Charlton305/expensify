import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routers/AppRoutes.jsx'
import configureStore from './store/configureStore.js'
import { Provider } from 'react-redux'
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>,
)