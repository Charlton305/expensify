import { createStore, combineReducers } from "redux"
import uuid from "uuid"

const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0 } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = (id = "") => ({
    type: "REMOVE_EXPENSE",
    id
})

const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})

const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
})

const sortByAmount = () => ({
    type: "SORT_BY",
    sortBy: "amount"
})

const sortByDate = () => ({
    type: "SORT_BY",
    sortBy: "date"
})

const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
})

const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
})

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];
        case "REMOVE_EXPENSE":
            return state.filter((item) => item.id !== action.id);
        case "EDIT_EXPENSE":
            return state.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        ...action.updates
                    }
                } else {
                    return item
                }
            })
        default:
            return state;
    }
}

const filtersReducerDefaultState = {
    text: "",
    sortBy: "",
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY":
            return {
                ...state,
                sortBy: action.sortBy
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

// store creation

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }))

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: "rent", amount: 300, createdAt: -10000 }))
const expenseTwo = store.dispatch(addExpense({ description: "coffee", amount: 200, createdAt: -1000 }))

// store.dispatch(removeExpense(expenseOne.expense.id))

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))

// store.dispatch(setTextFilter("es"))
// store.dispatch(setTextFilter())

store.dispatch(sortByDate())
store.dispatch(sortByAmount())

// store.dispatch(setStartDate(250))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(2600))

// const demoState = {
//     expenses: [{
//         id: "aj45k5krmmt55kk4",
//         description: "January rent",
//         note: "Last payment for this address",
//         amount: 54500,
//         createdAt: 0
//     }],
//     filters: {
//         text: "rent",
//         sortBy: "amount", // date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// }
