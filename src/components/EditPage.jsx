import { useSelector, useDispatch } from "react-redux"
import ExpenseForm from "./ExpenseForm"
import { editExpense, removeExpense } from "../reducers/expenses"
import { useNavigate, useParams } from "react-router-dom"

const EditPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const id = useParams().id
  const expenses = useSelector(state => state.expenses)
  const expense = expenses.find((expense) => expense.id === id)

  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={(updates) => {
          dispatch(editExpense({id, updates}))
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