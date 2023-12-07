import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";

export const ExpenseList = () => {
  const [filters, expenses] = [useSelector(state => state.filters), useSelector(state => state.expenses)]
  const filteredExpenses = getVisibleExpenses(expenses, filters)
  return (
    <div>
    {filteredExpenses.length > 0 ? "" : <h1>No expenses to show</h1>}
      {
        filteredExpenses.map((expense) => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      }
    </div>
  )
}

export default ExpenseList

