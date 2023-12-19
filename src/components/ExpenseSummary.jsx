import { useSelector } from "react-redux";
import numeral from "numeral";
import { Link } from "react-router-dom";
import getVisibleExpenses from "../selectors/expenses";
import expensesTotal from "../selectors/expenses-total";

export default () => {
  const [filters, expenses] = [useSelector(state => state.filters), useSelector(state => state.expenses)]
  const filteredExpenses = getVisibleExpenses(expenses, filters)
  const length = filteredExpenses.length
  const amount = numeral(expensesTotal(filteredExpenses) / 100).format("$0,0.00")
  const expenseWord = length === 1 ? "expense" : "expenses"

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{length}</span> {expenseWord} totalling <span>{amount}</span>.</h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add expense</Link>
        </div>
      </div>
    </div>
  )
}