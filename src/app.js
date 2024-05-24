import { config } from '../framework'
import axios from 'axios'

const scores = {
  Anna: 10,
  Olga: 1,
  Ivan: 5,
}

function getScore(obj) {
  return Object.values(obj).reduce((a, b) => a + b, 0)
}

const summ = getScore(scores)

console.log('summ = ', summ)
console.log('config = ', config)
// const axios_response = await axios.get(
//   'https://bookstore.demoqa.com/Account/v1/User',
//   {
//     userName: config.username,
//     password: config.password,
//   },
// )

console.log('axios_response = ', axios_response)
