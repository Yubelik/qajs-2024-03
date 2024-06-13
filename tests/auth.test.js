import BookService from '../framework/services/BookService.js'
// import config from '../framework/config/config.js'

// console.log('axios = ' + axios.isCancel('something'))
let uuidUser

// describe('Создание пользователя', () => {
//   it('Пользователь существует', async () => {
//     const response = await AuthService.addUser({
//       userName: config.username,
//       password: config.password,
//     })
//     expect(response.status).toBe(400)
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
// console.log('uuidUser = ' + uuidUser)
// describe('Авторизация', () => {
//   it('Успешная авторизация', async () => {
//     const response = await AuthService.authorized({
//       userName: config.username,
//       password: config.password,
//     })
//     expect(response.status).toBe(200)
//     expect(response.data).toBe(true)
//   })

//   it('Нельзя авторизоваться без пароля', async () => {
//     const response = await AuthService.authorized({
//       userName: config.username,
//       password: '',
//     })
//     expect(response.status).toBe(400)
//     expect(response.data.code).toBe('1200')
//     expect(response.data.message).toBe('UserName and Password required.')
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
//   it('Пользователь удален повторно', async () => {
//     const response = await AuthService.deletUser({
//       uuid: uuidUser,
//     })
//     expect(response.status).toBe(200)
//   })
// })

describe('Получение информации о книге', () => {
  it('Ответ получен', () => {
    const response = BookService.getBook({
      isbn: 9781449325862,
    })

    console.log('response.data = ' + response)
    expect(response).toBe()
    expect(response.status).toBe(200)
    expect(response.status).toBe(200)
  })
})
