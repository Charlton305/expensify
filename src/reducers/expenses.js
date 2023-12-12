import { createSlice } from '@reduxjs/toolkit'
import db from '../firebase/firebase'
import { addDoc, collection, getDocs } from "firebase/firestore"

const initialState = []

const expensesReducer = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (payload) => {
        return { payload }
      }
    },
    removeExpense(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    editExpense(state, action) {
      const data = action.payload
      return state.map((item) => {
        if (item.id === data.id) {
          return {
            ...item,
            ...data.updates
          }
        } else {
          return item
        }
      })
    },
    setExpenses(state, action) {
      return [
        ...state,
        ...action.payload
      ]
    }
  },
})

export const { addExpense, removeExpense, editExpense, setExpenses } = expensesReducer.actions

export const startSetExpenses = () => {
  return async (dispatch) => {
    const arr = []
    const response = await getDocs(collection(db, "expenses"))

    response.forEach((doc) => {
      const expense = doc.data()
      arr.push({
        ...expense,
        id: doc.id
      })
    })
    dispatch(setExpenses(arr))
  }
}

export const startAddExpense = (expense = {}) => {
  return async (dispatch) => {
    const response = await addDoc(collection(db, "expenses"), {
      ...expense
    })
    dispatch(addExpense({
      id: response.id,
      ...expense
    }))
  }
}

export default expensesReducer.reducer