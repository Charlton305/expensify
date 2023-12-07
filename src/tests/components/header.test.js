import React from "react"
import ShallowRenderer from "react-test-renderer/shallow"
import Header from "../../components/Header"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { ExpenseList } from "../../components/ExpenseList"
import expenses from "../fixtures/expenses"
import { Provider } from "react-redux"
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom"
import configureStore from "../../store/configureStore"

const store = configureStore()

test("should render header component", async () => {
  const renderer = new ShallowRenderer()
  renderer.render(<Provider store={store}><ExpenseList expenses={expenses} /></Provider>)
  // renderer.render(<Header />)
  expect(renderer.getRenderOutput()).toMatchSnapshot()

  render(<Header />, { wrapper: BrowserRouter })
  // expect(screen.getByText("Help")).toBeInTheDocument()

  const user = userEvent.setup()
  const button = screen.getByTestId("button")
  // await user.click(screen.getByText("Help"))
  const message = screen.getByTestId("message")
  expect(message).toHaveTextContent("egg")
  await user.click(button)
  expect(message).toHaveTextContent("potato")

  // await user.click(screen.getByText(/Add expense/i))
  // expect(screen.getByText(/Trevor/i)).toBeInTheDocument()

  // console.log(screen)
  // expect(getByText('Expensify')).toBeInTheDocument()


  // console.log(getByText("Expensify"))
  // expect(snap).toMatchSnapshot()
})
