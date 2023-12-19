import ExpenseSummary from "./ExpenseSummary"
import ExpenseListFilters from "./ExpenseListFilters"
import ExpenseList from "./ExpenseList"

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
)

export default ExpenseDashboardPage