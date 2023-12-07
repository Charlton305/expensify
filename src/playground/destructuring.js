// const person = {
//     name: "Lee",
//     age: 18,
//     location: {
//         city: "Sittingbourne",
//         temp: 15
//     }
// }

// const { name: firstName = "Anon", age } = person

// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location

// console.log(`Its ${temperature} degrees in ${city}.`)

// const book = {
//     title: "Daily Stoic",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// }

// const { name: publisherName = "Self Published" } = book.publisher

// console.log(publisherName)

// const address = ["Kirklee", "Grovehurst Road", "Sittingbourne", "Kent"]

// const [ , street, town, county ] = address

// console.log(`You are in ${town}, ${county}`)

const item = ["Coffee (hot)", "£2.00", "£2.50", "£3.00"]

const [choice, , medium, large] = item

console.log(`A medium ${choice} costs ${large}.`)



