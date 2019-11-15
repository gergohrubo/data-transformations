const cars = [
  {brand: 'Toyota', model: 'Aygo'},
  {brand: 'Skoda', model: 'Octavia'},
  {brand: 'Volkswagen', model: 'Passat'},
  {brand: 'Mercedes', model: 'CLS'},
  {brand: 'Seat', model: 'Ibiza'}
]

// Returns the first car object whose brand matches the brand parameter.
// function slowSearch(brand) {
//   return cars.find(car => car.brand === brand)
// }

const carsByBrand = cars.reduce((a,b) => {
  a[b.brand] = b.model
  return a
}, { })

// function fastSearch(brand) {
//   return carsByBrand[brand]   
// }

console.log(carsByBrand)

// IT IS GENERALLY MUCH FASTER TO CALL AN OBJECT PROPERTY THAN TO LOOP THROUGH AN ARRAY