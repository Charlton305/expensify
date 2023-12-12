import { createSlice } from '@reduxjs/toolkit'
import db from '../firebase/firebase'
import { addDoc, collection } from "firebase/firestore"

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
  },
})

export const { addExpense, removeExpense, editExpense } = expensesReducer.actions

export const startAddExpense = (expense = {}, dis) => {
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