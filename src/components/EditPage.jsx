import { useSelector, useDispatch } from "react-redux"
import ExpenseForm from "./ExpenseForm"
import { editExpense, removeExpense } from "../actions/expenses"
import { useNavigate, useParams } from "react-router-dom"

const EditPage = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const id = useParams().id
  const expenses = useSelector(state => state.expenses)
  const expense = expenses.find((expense) => expense.id === id)

  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={(data) => {
          dispatch(editExpense(id, data))
          navigate("/")
        }}
      />
      <button onClick={() => {
        dispatch(removeExpense(id))
        navigate("/")
      }}
      >Remove</button>
    </div>
  )
}

export default EditPage