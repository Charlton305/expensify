// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//     reducer:{
//        book: booking_reducer,
//        admin: admin_reducer,
//     }
//   })

import { createStore } from "redux"

const incrementCount = (incrementBy = 1) => ({
    type: "INCREMENT",
    incrementBy
})

const decrementCount = (decrementBy = 1) => ({
    type: "DECREMENT",
    decrementBy
})

const setCount = (newCount) => ({
    type: "SET",
    newCount
})

const resetCount = () => ({
    type: "RESET",
})

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case "RESET":
            return {
                count: 0
            }
        case "SET":
            return {
                count: action.newCount
            }
        default:
            return state
    }
})

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})


// unsubscribe()


store.dispatch(decrementCount(22))
store.dispatch(resetCount())

store.dispatch(setCount(-23))


// store.dispatch(incrementCount(100))
// store.dispatch(incrementCount())

// console.log(store.getState())