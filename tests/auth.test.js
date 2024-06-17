import AuthService from '../framework/services/AuthService.js'
import config from '../framework/config/config.js'
import config from '../framework/config/config.js'
import BookService from '../framework/services/BookService.js'
import config from '../framework/config/config.js'

// console.log('axios = ' + axios.isCancel('something'))
let uuidUser
// describe('Создание пользователя', () => {
//   it('Пользователь существует', async () => {
//     const response = await AuthService.addUser({
//       userName: config.username,
//       password: config.password,
//     })
//     expect(response.status).toBe(406)
//   })
// })

// describe('Логин', () => {
//   it('Пользователь залогинет', async () => {
//     const response = await AuthService.loginUser({
//       userName: config.username,
//       password: config.password,
//     })
//     expect(response.status).toBe(200)
//     uuidUser = response.data.userId
//   })
// })

// describe('Авторизация', () => {
//   it('Успешная авторизация', async () => {
//     const response = await AuthService.authorized({
//       userName: config.username,
//       password: config.password,
//     })
//     expect(response.status).toBe(200)
//     expect(response.data).toBe(false)
//   })
// })
// describe('Удаление пользователя', () => {
//   it('Пользователь удален', async () => {
//     const response = await AuthService.deletUser({
//       uuid: uuidUser,
//     })
//     expect(response.status).toBe(200)
//     expect(response.status).toBe(200)
//   })
// })

describe('Запрос книг', () => {
  it('Книга существует', async () => {
    const response = await BookService.getAll({
    })
    expect(response.status).toBe(200)
    let bookId = JSON.stringify(response.data.books[0].isbn)
    console.log("bookId = "+bookId)
  })
})

describe('Запрос книги', () => {
  it('Книга существует', async () => {
    const response = await BookService.getBook({
    })
    expect(response.status).toBe(200)
    
    
  })
})


