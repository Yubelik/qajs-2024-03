import AuthService from '../framework/services/AuthService.js'
import config from '../framework/config/config.js'
// import axios from 'axios'

// console.log('axios = ' + axios.isCancel('something'))
let uuidUser

// console.log(config.username, config.password,)
describe('Создание пользователя', () => {
  it('Пользователь существует', async () => {
    const response = await AuthService.addUser({
      userName: config.username,
      password: config.password,
    })
    expect(response.status).toBe(406)
  })
})
describe('Логин', () => {
  it('Пользователь залогинен', async () => {
    const response = await AuthService.loginUser({
      userName: config.username,
      password: config.password,
    })
    expect(response.status).toBe(200)
    uuidUser = response.data.userId
  })
})
describe('Авторизация', () => {
  it('Успешная авторизация', async () => {
    const response = await AuthService.authorized({
      userName: config.username,
      password: config.password,
    })
    expect(response.status).toBe(200)
    expect(response.data).toBe(true)
  })
})
describe('Добавление книги', () => {
  it('Книга добавлена', async () => {
    const response = await AuthService.addBook({
      data: uuidUser
    })
    console.log(response);
    expect(response.status).toBe(201)
    expect(response.data).toBe(true)
  })
})

