import moment from "moment"
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters"

test("should generate set start date action object", () => {
  const result = setStartDate(moment(0))
  expect(result).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  })
})

test("should generate set end date action object", () => {
  const result = setEndDate(moment(0))
  expect(result).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  })
})

test("should generate set text filter action object", () => {
  const result = setTextFilter("Lee")
  expect(result).toEqual({
    type: "SET_TEXT_FILTER",
    text: "Lee"
  })
})

test("should generate set text filter action object", () => {
  const result = setTextFilter()
  expect(result).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  })
})

test("should generate sort by amount action object", () => {
  const result = sortByAmount()
  expect(result).toEqual({
    type: "SORT_BY",
    sortBy: "amount"
  })
})

test("should generate sort by date action object", () => {
  const result = sortByDate()
  expect(result).toEqual({
    type: "SORT_BY",
    sortBy: "date"
  })
})