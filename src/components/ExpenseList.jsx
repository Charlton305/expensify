import React from "react";
import { useSelector } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";

const ExpenseList = () => {
  const [filters, expenses] = [useSelector(state => state.filters), useSelector(state => state.expenses)]
  const filteredExpenses = getVisibleExpenses(expenses, filters)

  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {
          filteredExpenses.length === 0 ? (
            <div className="list-item--message">
              <span>No expenses</span>
            </div>
          ) : (
            filteredExpenses.map((expense) => (
              <ExpenseListItem key={expense.id} {...expense} />
            ))
          )}
      </div>
    </div>
  )
}

export default ExpenseList

