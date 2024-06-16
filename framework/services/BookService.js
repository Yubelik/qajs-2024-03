import supertest from 'supertest'
import config from '../config/config.js'

const addBook = async () => {
  const response = await fetch(`${config.baseURL}/BookStore/v1/Books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic VXNlcjpBYXNkYXNkXyEyMzEyMzE=',
    },
    body: 'false',
  })
  return {
    status: response.status,
  }
}

const getBooks = async () => {
  const response = await supertest(config.baseURL).get('/BookStore/v1/Books')
  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}

const getBook = async () => {
  const response = await supertest(config.baseURL).get(
    `/BookStore/v1/Book?ISBN=9781593275846`,
  )
 
  //   console.log(config.baseURL + `/BookStore/v1/Book?ISBN=${isbn}`)
  // console.log(response.status)
  return {
    // headers: response.headers,
    status: response.status,
    data: response,
  }
}


export default {
  getAll: getBooks,
  getBook, addBook,
}
