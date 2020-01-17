//Repeative Code that does the same thing
// let dogName = "Ada Grace"
// let ownerName = "Kristen"

// console.log(`${dogName} is owned by ${ownerName}`)

// dogName = "Raleigh"
// ownerName = "Margaret"

// console.log(`${dogName} is owned by ${ownerName}`)

// dogName = "Francis"
// ownerName = "Jane"

//results in an error because the user mistyped the variable names
// console.log(`${dog} is owned by ${owner}`)

console.log("--------Pure Functions--------")
//dogOwners function takes two parameters: dogName & ownerName.
//this is an example of a pure function because given the same input, it will result in the same output and has no effect on anything else in the application
function dogOwners (dogName, ownerName) {
    console.log(`${dogName} is owned by ${ownerName}`)
}

dogOwners("Ada Grace", "Kristen")
dogOwners("Raleigh", "Margaret")
dogOwners("Francis", "Jane")
//same line 28 has the same arguments as line 25, and outputs the same thing
dogOwners("Raleigh", "Margaret")

//The function expects the user to pass it two arguments when it is invoked. If the user only passes it one, then the second one will be undefined
dogOwners("Ada Grace")


console.log("--------Impure Functions--------")
//This is an example of an impure function. Given the same inputs, it will result in different output
function randomNumbers (num) {
    const newNumber = Math.random() * num;
    console.log(newNumber)
}

randomNumbers(5)
randomNumbers(5)

//This is an example of an impure function. It effects another part of the application
const addGreen = function (domElement) {
    const element = document.querySelector(domElement)
    element.classList.add("green")
}

addGreen("#impure")