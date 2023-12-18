import { Routes, Route } from "react-router-dom"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditPage from "../components/EditPage";
import NotFoundPage from "../components/NotFoundPage";

const RenderRoutes = (props) => {
  const authenticated = props.authenticated

  return (
    <Routes>
      <Route path="/" element={<ExpenseDashboardPage />} />
      <Route path="/create" element={<AddExpensePage />} />
      <Route path="/edit/:id" element={<EditPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default RenderRoutes

