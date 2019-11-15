const people = [
  {name: 'Don', age: 23},
  {name: 'Adam', age: 33},
  {name: 'Steve', age: 14},
  {name: 'Rachel', age: 56},
  {name: 'Maud', age: 46},
  {name: 'Hermien', age: 28}
]

const oldestSoFar = function(a,b) {
  if (a.age > b.age) {
    return a
  }
  return b
}

console.log(people.reduce(oldestSoFar))