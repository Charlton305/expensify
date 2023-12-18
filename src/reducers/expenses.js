import { createSlice } from '@reduxjs/toolkit'
import db from '../firebase/firebase'
import { collection, getDocs, doc, deleteDoc, updateDoc, setDoc } from "firebase/firestore"
import { v4 as uuid } from 'uuid'

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
        ...action.payload
      ]
    }
  },
})

export const { addExpense, removeExpense, editExpense, setExpenses } = expensesReducer.actions

export const startSetExpenses = () => {
  return async (dispatch, getState) => {
    const arr = []
    const userId = getState().auth.uid
    const response = await getDocs(collection(db, "users", userId, "expenses"))
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
  return async (dispatch, getState) => {
    const userId = getState().auth.uid
    const expenseId = uuid()
    const response = await setDoc(doc(db, "users", userId, "expenses", expenseId), {
      ...expense
    })
    dispatch(addExpense({
      id: expenseId,
      ...expense
    }))
  }
}

export const startRemoveExpense = (id) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.uid
    await deleteDoc(doc(db, "users", userId, "expenses", id))
    dispatch(removeExpense(id))
  }
}

export const startEditExpense = (id, updates) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.uid
    await updateDoc(doc(db, "users", userId, "expenses", id), {
      ...updates
    })
    dispatch(editExpense({
      id,
      updates
    }))
  }
}

export default expensesReducer.reducer