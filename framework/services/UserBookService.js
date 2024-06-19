import supertest from 'supertest'
import config from '../config/config.js'

const replaceBook = async ({ userId, fromIsbn, toIsbn, token }) => {
  const response = await supertest(config.baseURL)
    .put(`/BookStore/v1/Books/${fromIsbn}`)
    .set('Authorization', `Bearer ${token}`)
    .send({
      userId,
      isbn: toIsbn,
    })
  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}

const addListOfBooks = async ({ userId, isbns, token }) => {
  const payload = {
    userId,
    collectionOfIsbns: isbns.map(isbn => ({ isbn })),
  }

  const response = await supertest(config.baseURL)
    .post('/BookStore/v1/Books')
    .set('Accept', 'application/json')
    .set('Authorization', 'Basic VXNlcjpBYXNkYXNkXyEyMzEyMw==')
    .send(payload)

  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}
// console.log(addListOfBooks)
const removeAllBooks = async ({ userId, token }) => {
  const response = await supertest(config.baseURL)
    .delete(`/BookStore/v1/Books?UserId=${userId}`)
    .set('Authorization', `Bearer ${token}`)
  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}

export default {
  replace: replaceBook,
  addList: addListOfBooks,
  removeAll: removeAllBooks,
}
