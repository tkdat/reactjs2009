// Exercise 1
function isCompare(arr1, arr2) {
    return arr1.toString() == arr2.toString()
}

// Exercise 2
function cleanArr(arr) {
    const result = arr.toString()
    return result.split(',')
}

// Exercise 3
function divisionArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        solve = arr.slice(i, i + size)
        result.push(solve)
    }
    return result
}

// Exercise 4
function findArr(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            arr1[i] == arr2[j]
        }
        return arr2[i]
    }

}

// Exercise 5
function compareDate(input) {
    const date1 = new Date(input)
    const date2 = new Date('Oct 30, 2020 12:30:32')
    if (date1 <= date2) {
        return true
    }
    else return false
}

// Exercise 6
const regexEmail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
function checkEmail(email) {
    return regexEmail.test(email)
}

const regexUserName = /^([a-z0-9_]){2,10}$/
function checkUser(userName) {
    if (userName.indexOf('__') === -1) return regexUserName.test(userName)
    return false
}
