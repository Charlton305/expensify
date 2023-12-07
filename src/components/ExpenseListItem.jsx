import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h2>{description}</h2>
      </Link>
      <p>Amount: {numeral(amount / 100).format("$0,0.00")}</p>
      <p>Created at: {moment(createdAt).format("MMMM Do, YYYY")}</p>
    </div>
  )
}

export default ExpenseListItem