import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <Link to={`/edit/${id}`}><h2>{description}</h2></Link>

      <p>Amount: {amount}</p>
      <p>Created at: {createdAt}</p>
      <button onClick={() => {
        dispatch(removeExpense(id))
      }}
      >Remove</button>
      <p>------------------------------</p>
    </div>
  )
}

export default ExpenseListItem