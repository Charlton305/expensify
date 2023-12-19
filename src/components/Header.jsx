import { NavLink, Link } from "react-router-dom"
import { useState } from "react"
import { startLogout } from "../actions/auth"
import { useDispatch } from "react-redux"

const Header = () => {
  const dispatch = useDispatch()

  const handleStartLogout = () => {
    dispatch(startLogout)
  }
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/">
            <h1>Expensify</h1>
          </Link>
          <button className="button button--link" onClick={handleStartLogout}>Logout</button>
        </div>
      </div>
    </header>
  )
}

export default Header