const numbers = [0, 1, 4, 5, 6, 9]

const resultObject = numbers.reduce((a,b) => {
  if (b % 2 === 0) {
    a['even'].push(b)
  } else {
    a['odd'].push(b)
  }
  return a
}, { even: [], odd: []})

console.log(resultObject)