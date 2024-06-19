import AuthService from '../framework/services/AuthService.js'
import BookService from '../framework/services/BookService.js'
import UserBookService from '../framework/services/UserBookService.js'
import config from '../framework/config/config.js'
import books from '../framework/fixtures/books.json'

describe('Книги', () => {
  const userId = config.userId
  const isbn = books.books[0].isbn
  const [book2] = books.books[1].isbn

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
  })

  it('Получение информации о книге', async () => {
    const response = await BookService.getBook({ isbn })
    expect(response.status).toBe(200)
    expect(response.data.title).toEqual('Git Pocket Guide')
  })

  it('Добавление книги в коллекцию к пользователю', async () => {
    const response = await UserBookService.addBook({
      userId,
      isbns: [isbn],
    })
    expect(response.data).toEqual({ books: [{ isbn }] })
  })

  it('Заменить книгу в коллекции пользователя', async () => {
    const responseAddBook = await UserBookService.replace({
      userId,
      fromIsbn: isbn,
      toIsbn: book2.isbn,
    })
    expect(responseAddBook.data).toEqual({
      books: [book2],
      userId,
      username: config.username,
    })
  })

  it('Удалить книгу', async () => {
    const response = await UserBookService.removeBook({
      userId,
      isbn,
    })
    expect(response.data).toEqual({})
  })
})
