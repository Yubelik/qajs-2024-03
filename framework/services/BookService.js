import supertest from 'supertest'
import config from '../config/config.js'

const getBooks = async () => {
  const response = await supertest(config.baseURL).get('/BookStore/v1/Books')
  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}

const getBook = () => {
  const response = supertest(config.baseURL).get(
    `/BookStore/v1/Book?ISBN=9781449325862`,
  )
  //   console.log(config.baseURL + `/BookStore/v1/Book?ISBN=${isbn}`)
  return {
    // headers: response.headers,
    // status: response.status,
    data: response,
  }
}
console.log(getBook())
// const getBook = ({ isbn }) => {
//   const response = supertest(config.baseURL).get(
//     `/BookStore/v1/Book?ISBN=${isbn}`,
//   )
//   return {
//     // headers: response.headers,
//     // status: response.status,
//     data: response,
//   }
// }

export default {
  getAll: getBooks,
  getBook,
}
