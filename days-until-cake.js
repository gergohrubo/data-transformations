const moment = require('moment')

const cakeGivers = [
  {name: 'Fred', birthday: 'Feb 15, 1983'},
  {name: 'Wilma', birthday: 'Mar 01, 1994'},
  {name: 'Barney', birthday: 'Dec 20, 1990'},
  {name: 'Pebbles', birthday: 'Nov 17, 1985'},
  {name: 'Scooby', birthday: 'Aug 13, 1983'},
  {name: 'Shaggy', birthday: 'May 06, 1982'},
  {name: 'Daphne', birthday: 'Jan 04, 1995'},
  {name: 'Velma', birthday: 'Jul 27, 1999'},
  {name: 'Tom', birthday: 'Jun 26, 1989'}
]

const convertedDates = cakeGivers.map(person => {
  const [monthDay, year] = person['birthday'].split(',')
  const [month, day] = monthDay.split(' ')
  let monthDigit = '0'
  switch (month) {
    case 'Jan':
      monthDigit = '01'
      break
    case 'Feb':
      monthDigit = '02'
      break
    case 'Mar':
      monthDigit = '03'
      break
    case 'Apr':
      monthDigit = '04'
      break
    case 'May':
      monthDigit = '05'
      break
    case 'Jun':
      monthDigit = '06'
      break
    case 'Jul':
      monthDigit = '07'
      break
    case 'Aug':
      monthDigit = '08'
      break
    case 'Sep':
      monthDigit = '09'
      break
    case 'Oct':
      monthDigit = '10'
      break
    case 'Nov':
      monthDigit = '11'
      break
    case 'Dec':
      monthDigit = '12'
      break
  }
  let date = moment('2019' + monthDigit + day, 'YYYYMMDD').fromNow()
  if (date.indexOf('ago') > 0) {
    date = moment('2020' + monthDigit + day, 'YYYYMMDD').fromNow()
  }
  return date
})

console.log(convertedDates)

// const daysUntilBirthdays = cakeGivers.map(person =>)