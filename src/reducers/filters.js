import moment from "moment"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
}

const filtersReducer = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTextFilter(state, action) {
      state.text = action.payload
    },
    sortByAmount(state) {
      state.sortBy = "amount"
    },
    sortByDate(state) {
      state.sortBy = "date"
    },
    setStartDate(state, action) {
      state.startDate = action.payload
    },
    setEndDate(state, action) {
      state.endDate = action.payload
    }
  },
})

export const {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setEndDate,
  setStartDate
} = filtersReducer.actions

export default filtersReducer.reducer