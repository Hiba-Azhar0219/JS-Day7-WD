function Question1() {
  console.log('Initialized')
  let students = [
    'Naila',
    'laila,',
    'Zubash',
    'Durain',
    'Zarfishan',
    'Gulfishan',
    'Maha Rabat',
    'Sri Krishna Devi',
  ]
  let houseofStudents = []
  for (student of students) {
    if (student.length < 6) {
      houseofStudents.push('Unity')
    } else if (student.length < 8) {
      houseofStudents.push('Faith')
    } else if (student.length < 12) {
      houseofStudents.push('Discipline')
    } else if (student.length >= 12) {
      houseofStudents.push('Tolerance')
    }
  }
  console.log(houseofStudents)
  console.log(students, houseofStudents)
}
//Question1 ends

//function to double each element but ignores the duplicate ones
function Question2() {
  let numbers = [1, 2, 4, 54, 66, 22, 42, 22, 44, 6, 2, 42, 63, 24, 2, 1]
  console.log(numbers)
  let double = []
  function doubles(a) {
    return a * 2
  }
  for (number of numbers) {
    try {
      if (!double.includes(doubles(number))) double.push(doubles(number))
    } catch (err) {
      console.log('Duplicated')
    }
  }
  console.log(double)
}
//Question2 ends

function Question3() {
  let str1 = 'Hiba'
  let str2 = Array.from(str1)
  str2 = str2.reverse()
  console.log(`${str1}${str2.join('')}`)
}
//Question3 ends

//Question 4 : Password Validator

// let values = [1, 34, 5, 66, 224, 2, -6, 55, 5, 324, 6]
// function sum(a, b) {
//   if (a >= 0 && b >= 0)
//     values.reduce((e1, e2) => {
//       return parseInt(e1) + parseInt(e2)
//     })

// }
// console.log(values)
