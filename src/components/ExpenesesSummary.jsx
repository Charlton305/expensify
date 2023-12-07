import getVisibleExpenses from "../selectors/expenses";
import expensesTotal from "../selectors/expenses-total";
import { useSelector } from "react-redux";
import numeral from "numeral";

export default () => {
  const [filters, expenses] = [useSelector(state => state.filters), useSelector(state => state.expenses)]
  const filteredExpenses = getVisibleExpenses(expenses, filters)
  const length = filteredExpenses.length
  const amount = numeral(expensesTotal(filteredExpenses) / 100).format("$0,0.00")
  return (
    <div>
      <h1>Viewing {length} expense{length !== 1 && "s"} totalling {amount}.</h1>
    </div>
  )
}