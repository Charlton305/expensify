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
  const onTextChange = (e) => {
    dispatch(setTextFilter(e.target.value))
  }
  const onSortChange = (e) => {
    if (e.target.value === "amount") {
      dispatch(sortByAmount())
    } else if (e.target.value === "date") {
      dispatch(sortByDate())
    }
  }
  return (
    <div className="content-container">
      <div className="input-group">
        <div className="input-group__item">
          <input
            type="text"
            value={filters.text}
            placeholder="Search expenses"
            className="text-input"
            onChange={onTextChange} />
        </div>
        <div className="input-group__item">
          <select
            value={filters.sortBy}
            className="select"
            onChange={onSortChange}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <div className="input-group__item">
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
      </div>




    </div>
  )
}

export default ExpenseListFilters