import { useSelector, useDispatch } from "react-redux"
import ExpenseForm from "./ExpenseForm"
import { startEditExpense, startRemoveExpense } from "../reducers/expenses"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"

const EditPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const id = useParams().id
  const expenses = useSelector(state => state.expenses)
  const expense = expenses.find((expense) => expense.id === id)

  const handleSubmit = (updates) => {
    dispatch(startEditExpense(id, updates))
    navigate("/")
  }
  const handleOnClick = () => {
    dispatch(startRemoveExpense(id))
    navigate("/")
  }

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm expense={expense} onSubmit={handleSubmit} />
        <button className="button--grey" onClick={handleOnClick}>Remove expense</button>
      </div>
    </div>
  )
}

export default EditPage