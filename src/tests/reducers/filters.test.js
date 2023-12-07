import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  const result = filtersReducer(undefined, { type: "@@INIT" })
  expect(result).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  })
})

test("should set sort by date", () => {
  const result = filtersReducer({
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  }, {
    type: "SORT_BY",
    sortBy: "date"
  })
  expect(result.sortBy).toBe("date")
})

test("should set sort by amount", () => {
  const result = filtersReducer(undefined, { type: "SORT_BY", sortBy: "amount" })
  expect(result.sortBy).toBe("amount")
})

// should set text filter
test("should set text filter", () => {
  const result = filtersReducer(undefined, { type: "SET_TEXT_FILTER", text: "e" })
  expect(result.text).toEqual("e")
})

// should set start date filter
test("should set start date filter", () => {
  const result = filtersReducer(undefined, {
    type: "SET_START_DATE",
    startDate: moment(0).add(3, "days")
  })
  expect(result.startDate).toEqual(moment(0).add(3, "days"))
})

// should set end date filter
test("should set end date filter", () => {
  const result = filtersReducer(undefined, {
    type: "SET_END_DATE",
    endDate: moment(0).add(8, "days")
  })
  expect(result.endDate).toEqual(moment(0).add(8, "days"))
})