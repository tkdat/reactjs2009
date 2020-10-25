// Bài 1
function printTable(n) {
  if (n < 1 || n > 10) return
  console.log('In bảng nhân:')
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`)
  }
}

// Bài 2
function getEvennumber(n) {
  if (n < 1 || n > 30) return
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) console.log(i)
  }
}

// Bài 3
function getTotal(n) {
  if (n < 1 || n > 30) return
  let sum = 1
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  console.log(sum)
}

// Bài 4
function getFactorial(n) {
  if (n < 1 || n > 30) return
  let sum = 1
  for (let i = 1; i <= n; i++) {
    sum *= i
  }
  return sum
}

// Bài 5
function countEvennumber(arr) {
  let sum = 0
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) sum++
  }
  return sum
}

// Bài 6
function deleteIteration(arr) {
  let array = []
  for (let i = 0; i <= arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i])
    }
  }
  return array
}

// Bài 7
const studentNames = [
  { id: 1, name: 'Nguyễn Thị Tèo' },
  { id: 2, name: 'Phạm Văn Bưởi' },
  { id: 3, name: 'Hoàng Văn Nam' },
  { id: 4, name: 'Vũ Ngọc Duy' }
]
const studentScores = [
  { id: 1, score: 9.2 },
  { id: 2, score: 2.3 },
  { id: 3, score: 3.7 },
  { id: 4, score: 6.9 }
]

function createArr(studentNames, studentScores) {
  for (let i = 0; i < studentNames.length; i++) {
    for (let j = 0; j < studentScores.length; j++) {
      if (studentNames[i].id = studentScores[j].id) studentNames[i].score = studentScores[j].score
    }
  }
  return studentNames
}

// Bài 8
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 }
]

students.sort(function (a, b) {
  return a.score - b.score
})
console.log('theBest', students[0]);
console.log('theBad', students[students.length - 1])
