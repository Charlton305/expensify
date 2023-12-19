import ExpenseForm from "./ExpenseForm"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { startAddExpense } from "../reducers/expenses"


const AddExpensePage = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = (expense) => {
    dispatch(startAddExpense(expense))
    navigate("/")
  }

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default AddExpensePage