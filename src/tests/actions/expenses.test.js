import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const result = removeExpense("123")
  expect(result).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123"
  })
})

test("should setup edit expense action object", () => {
  const result = editExpense("123", { note: "new note" })
  expect(result).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: {
      note: "new note"
    }
  })
})

test("should setup add expense action object", () => {
  const input = {
    description: "new note",
    note: "stuff",
    amount: 2100,
    createdAt: 1000
  }
  const result = addExpense(input)
  expect(result).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...input,
      id: expect.any(String)
    }
  })
})

test("should setup add expense action object", () => {
  const result = addExpense()
  expect(result).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  })
})