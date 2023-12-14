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
    <div>
      <header>
        <h1>Expensify</h1>
        <nav>
          <Link to="/">Home </Link>
          <br />
          <NavLink to="/create">Add Expense </NavLink>
        </nav>
        <button onClick={handleStartLogout}>Logout</button>
      </header>
    </div>
  )
}

export default Header