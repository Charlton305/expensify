import { NavLink, Link } from "react-router-dom"
import { useState } from "react"

const Header = () => {
  return (
    <div>
      <header>
        <h1>Expensify</h1>
      </header>
      <nav>
        <Link to="/">Home </Link>
        <br />
        <NavLink to="/create">Add Expense </NavLink>
      </nav>
    </div>
  )
}

export default Header