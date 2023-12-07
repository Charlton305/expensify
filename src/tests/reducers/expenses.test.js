import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses"

test("should set default state", () => {
  const result = expensesReducer(undefined, { type: "@@INIT" })
  expect(result).toEqual([])
})

test("should remove expense if id found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "2"
  }
  const result = expensesReducer(expenses, action)

  expect(result).toEqual([
    expenses[0], expenses[2]
  ])
})

test("should not remove any expenses", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "5"
  }
  const result = expensesReducer(expenses, action)

  expect(result).toEqual(expenses)
})

test("should edit expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "1",
    updates: {
      note: "new note contents"
    }
  }
  const result = expensesReducer(expenses, action)
  expect(result[0].note).toEqual("new note contents")
})

test("should not edit expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "5",
    updates: {
      note: "new note contents"
    }
  }
  const result = expensesReducer(expenses, action)
  expect(result).toEqual(expenses)
})

test("should add item to array", () => {
  const expense = {
    id: "4",
    description: "fags",
    note: "",
    amount: 400,
    createdAt: 25000
  }
  const action = {
    type: "ADD_EXPENSE",
    expense
  }
  const result = expensesReducer(expenses, action)

  expect(result).toEqual([
    ...expenses,
    expense
  ])
})