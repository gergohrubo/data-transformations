const names = ["George", "Richard", "Abraham", "Donald"]
const ages = {
  George: 55,
  Richard: 86,
  Abraham: 50,
  Donald: 65
}
const addresses = {
  George: "Fleet street, 121b",
  Richard: "Bermuda drive, 33",
  Abraham: "Cincinatti Av., 22a"
}
const willDeliverPizza = {
  "Fleet street": true,
  "Bermuda drive": false,
  "Cincinatti Av.": true
}

// const probaString = 'hello, there'
// console.log(probaString.split(',', 1))

const presidentialData = {}

presidentialData['userData'] = names.map(name => {
  const objectToReturn = {
    name,
    age: ages[name],
    address: addresses[name],
    willDeliverPizza: 'Unknown'
  }
  if (addresses[name] !== undefined) {
    const address = addresses[name]
    const streetName = address.split(',', 1)
    objectToReturn['willDeliverPizza'] = willDeliverPizza[streetName]
  }
  return objectToReturn
})


presidentialData['highestAge'] = Math.max(...Object.values(ages))
presidentialData['lowestAge'] = Math.min(...Object.values(ages))

console.log(presidentialData)