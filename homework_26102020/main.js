// Bài 1
function returnArr(a, b) {
  let arr = []
  for (let i = 1; i <= b; i++) {
    arr.push(a)
  }
  console.log(arr)
}

// Bài 2
function reverseArr(arr) {
  arr.sort(function (a, b) { return b - a });
  console.log(arr)
}

// Bài 3
function deleteArr(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === "number") {
      result.push(arr[i])
    }
  }
  return result
}

// Bài 4
function createObj(arr) {
  let result = {}
  arr.forEach(item => {
    result[item[0]] = item[1]
  })
  return result
}

// Bài 5
function sortArr(arr) {
  arr.sort(function (a, b) { return a - b });
  console.log(arr)
}

// Bài 6
function check(a) {
  if (typeof (a) === "object") return true
  else return false
}

// Bài 7
function deleteInput(obj, arr) {
  for (let key in obj) {
    arr.forEach(i => {
      if (key === i) {
        delete (obj[key])
      }
    })
  }
  return obj
}

// Bài 8
function deleteSome(arr) {
  if (arr.length < 5) return console.log('error')
  else arr.splice(1, 2)
  return arr
}

// Bài 9
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Vũ Duy Anh', score: 8.8 }
]
function checkScore(arr) {
  let result = []
  arr.forEach(students => {
    if (students.score < 5.0 || (students.name.indexOf('Duy') > -1)) result.push('Fail')
    else result.push('Pass')
  })
  return result
}

// Bài 10
function find(arr) {
  let result = []
  arr.forEach(students => {
    let sum = parseInt(students.score) + (students.score * 10 - parseInt(students.score) * 10)
    if (sum > 5 && sum < 10 || sum > 15 && sum < 20) result.push(students)
  })
  return result
}
