import BookService from '../framework/services/BookService.js'
import config from '../framework/config/config.js'
import books from '../framework/fixtures/books.json'
// import * as books from './example.json';
console.log(books)
describe('Книги', () => {
  const userId = config.userId
  const [book1, book2] = books
  const isbn = book1.isbn

  let token

  beforeAll(async () => {
    const { data } = await AuthService.generateToken({
      userName: config.username,
      password: config.password,
    })

    token = data.token
  })

  it('Список книг', async () => {
    const response = await BookService.getAll()

    expect(response.status).toBe(200)
    expect(response.data).toEqual({ books })
  })

  // it('Книга существует', async () => {
  //   const response = await BookService.getAll({})
  //   expect(response.status).toBe(200)
  //   let bookId = JSON.stringify(response.data.books[0].isbn)
  //   console.log('bookId = ' + bookId)
  // })

  // it('Книга существует', async () => {
  //   const response = await BookService.getBook({})
  //   expect(response.status).toBe(200)
  // })

  // it('Книга создана', async () => {
  //   const response = await BookService.getBook({})
  //   expect(response.status).toBe(200)
  //   console.log('bookAdd status = ' + response.status)
  //   expect(response.headers).toBe(200)
  //   console.log('bookAdd headers = ' + response.headers)
  //   expect(response.data).toBe(200)
  //   console.log('bookAdd data = ' + response.data)
  // })
})
