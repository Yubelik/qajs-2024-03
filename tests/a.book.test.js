import AuthService from '../framework/services/AuthService.js'
import BookService from '../framework/services/BookService.js'
import UserBookService from '../framework/services/UserBookService.js'
import config from '../framework/config/config.js'
import books from '../framework/fixtures/books.json'

describe('Книги', () => {
  const userId = config.userId
  // const [book1, book2] = books
  const isbn = books.books[0].isbn

  let token

  beforeAll(async () => {
    const { data } = await AuthService.generateToken({
      userName: config.username,
      password: config.password,
    })

    token = data.token
    // console.log(token)
  })

  it('Список книг', async () => {
    const response = await BookService.getAll()
    expect(response.status).toBe(200)
  })

  it('Получение информации о книге книги', async () => {
    const response = await BookService.getBook({ isbn })
    // console.log('getBook = ' + JSON.stringify(response.data))
    expect(response.status).toBe(200)
    expect(response.data.title).toEqual('Git Pocket Guide')
    // let bookId = JSON.stringify(response.data.books[0].isbn)
    // console.log('bookId = ' + bookId)
  })

  it('Добавление книги в коллекцию к пользователю', async () => {
    const responseAddListOfBooks = await UserBookService.addList({
      userId,
      isbns: [isbn],
      token: token,
    })
    console.log(responseAddListOfBooks)
    expect(responseAddListOfBooks.data).toEqual({ books: [{ isbn }] })
  })

  it('Заменить книгу в коллекции пользователя', async () => {
    const responseAddBook = await UserBookService.replace({
      userId,
      fromIsbn: isbn,
      toIsbn: book2.isbn,
      token,
    })
    expect(responseAddBook.data).toEqual({
      books: [book2],
      userId,
      username: config.username,
    })
  })
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
