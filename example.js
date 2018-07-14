import countItDown from 'count-it-down'
const weddingDate = new Date('01/26/2019')

countItDown(weddingDate, console.log)
// {days: 195, hours: 12, minutes: 4, seconds: 50}
// {days: 195, hours: 12, minutes: 4, seconds: 49}
// ...
