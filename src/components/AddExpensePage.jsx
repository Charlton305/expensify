import ExpenseForm from "./ExpenseForm"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { startAddExpense } from "../reducers/expenses"


const AddExpensePage = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Add expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          dispatch(startAddExpense(expense))
          navigate("/")
        }}
      />
    </div>
  )
}

export default AddExpensePage