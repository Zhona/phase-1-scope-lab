// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer = 'not bob' // this is a global scope because we didnt use var, let or const
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = 'me '
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "not me"
}