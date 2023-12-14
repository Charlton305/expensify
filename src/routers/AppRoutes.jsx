import React, { useEffect, useState } from "react"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import Header from "../components/Header";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditPage from "../components/EditPage";
import LoginPage from "../components/LoginPage";
// import HelpPage from "./components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import { history } from "../helpers/history";
import { auth } from "../firebase/firebase";


const AppRoutes = () => {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      user ? setAuthenticated(true) : setAuthenticated(false)
    })
    return unsubscribe
  })


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={authenticated ? <ExpenseDashboardPage /> : <LoginPage />} />
        {/* <Route path="/dashboard" element={<ExpenseDashboardPage />} /> */}
        <Route path="/create" element={<AddExpensePage />} />
        <Route path="/edit/:id" Component={EditPage} />
        {/* <Route path="/help" element={<HelpPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default AppRoutes;