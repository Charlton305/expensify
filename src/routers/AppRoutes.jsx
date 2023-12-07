import React from "react"
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import Header from "../components/Header";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditPage from "../components/EditPage";
// import HelpPage from "./components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<ExpenseDashboardPage />} />
      <Route path="/create" element={<AddExpensePage />} />
      <Route path="/edit/:id" Component={EditPage} />
      {/* <Route path="/help" element={<HelpPage />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)

export default App;