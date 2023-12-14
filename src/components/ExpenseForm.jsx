import moment from "moment"
import { history } from "../helpers/history"
import { useState } from "react"
import { SingleDatePicker } from "react-dates"
import "react-dates/lib/css/_datepicker.css"
import 'react-dates/initialize';

const ExpenseForm = (props) => {
  setTimeout(() => {
    history.navigate("/")
  }, 3000)
  // initiate state
  const expense = props.expense
  const initialState = {
    description: expense ? expense.description : "",
    note: expense ? expense.note : "",
    amount: expense ? (expense.amount / 100).toString() : "",
    createdAt: expense ? moment(expense.createdAt) : moment(),
    calendarFocused: false
  }
  const [description, setDescription] = useState(initialState.description)
  const [note, setNote] = useState(initialState.note)
  const [amount, setAmount] = useState(initialState.amount)
  const [createdAt, setCreatedAt] = useState(initialState.createdAt)
  const [calendarFocused, setCalendarFocused] = useState(initialState.calendarFocused)
  const [error, setError] = useState("")

  // event handlers
  const onDescriptionChange = (e) => {
    const newDescription = e.target.value
    setDescription(newDescription)
  }
  const onNoteChange = (e) => {
    const newNote = e.target.value
    setNote(newNote)
  }
  const onAmountChange = (e) => {
    const newAmount = e.target.value
    if (!newAmount || newAmount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(newAmount)
    }
  }
  const onDateChange = (date) => {
    if (date) {
      setCreatedAt(date)
    }
  }
  const onFocusChange = ({ focused }) => {
    setCalendarFocused(focused)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (!description || !amount) {
      setError("Please provide description and amount")
    } else {
      setError("")
      props.onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note
      })
    }
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={description}
          onChange={onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={onAmountChange}
        />
        <SingleDatePicker
          date={createdAt}
          onDateChange={onDateChange}
          focused={calendarFocused}
          onFocusChange={onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add a note for your expense (optional)"
          value={note}
          onChange={onNoteChange}
        >
        </textarea>
        <button>Add expense</button>
      </form>
    </div>
  )

}

export default ExpenseForm