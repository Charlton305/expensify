import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DateRangePicker } from "react-dates"
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../reducers/filters.js"

const ExpenseListFilters = () => {
  const dispatch = useDispatch()
  const [calendarFocused, setCalendarFocused] = useState(null)
  const filters = useSelector(state => state.filters)

  const onDatesChange = ({ startDate, endDate }) => {
    dispatch(setStartDate(startDate))
    dispatch(setEndDate(endDate))
  }
  const onFocusChange = (calendarFocused) => {
    setCalendarFocused(calendarFocused)
  }
  return (
    <div>
      <input
        type="text"
        value={filters.text}
        onChange={(e) => {
          dispatch(setTextFilter(e.target.value))
        }} />
      <select
        value={filters.sortBy}
        onChange={(e) => {
          if (e.target.value === "amount") {
            dispatch(sortByAmount())
          } else if (e.target.value === "date") {
            dispatch(sortByDate())
          }
        }}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>

      <DateRangePicker
        startDate={filters.startDate}
        startDateId={"startDateId"}
        endDate={filters.endDate}
        endDateId={"endDateId"}
        onDatesChange={onDatesChange}
        focusedInput={calendarFocused}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />
    </div>
  )
}

export default ExpenseListFilters