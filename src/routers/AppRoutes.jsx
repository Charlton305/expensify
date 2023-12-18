import React, { useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Header from "../components/Header";
import RenderRoutes from "../components/RenderNavigation";
import LoginPage from "../components/LoginPage";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const [authenticated] = [useSelector(state => !!state.auth.uid)]
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/")
  }, [authenticated])

  if (!authenticated) {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    )
  } else {
    return (
      <div>
        <Header />
        <RenderRoutes authenticated={authenticated} />
      </div>
    )
  }


}

export default AppRoutes;