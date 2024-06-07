import AuthService from '../framework/services/AuthService.js'
import config from '../framework/config/config.js'
import UserFixture from '../framework/fixtures/userFixture.js'
import axios from 'axios'

console.log('axios = ' + axios.isCancel('something'))
let uuidUser
describe('Создание пользователя', () => {
  it('Пользователь существует', async () => {
    const response = await AuthService.addUser({
      userName: config.userName,
      password: config.password,
    })
    expect(response.status).toBe(406)
  })
})

describe('Логин', () => {
  it('Пользователь залогинет', async () => {
    const response = await AuthService.loginUser({
      userName: config.userName,
      password: config.password,
    })
    expect(response.status).toBe(200)
    uuidUser = response.data.userId
  })
})

describe('Авторизация', () => {
  it('Успешная авторизация', async () => {
    const response = await AuthService.authorized({
      userName: config.userName,
      password: config.password,
    })
    expect(response.status).toBe(200)
    expect(response.data).toBe(true)
  })

  it('Нельзя авторизоваться без пароля', async () => {
    const response = await AuthService.authorized({
      userName: config.userName,
      password: '',
    })
    expect(response.status).toBe(400)
    expect(response.data.code).toBe('1200')
    expect(response.data.message).toBe('UserName and Password required.')
  })
})
describe('Удаление пользователя', () => {
  it('Пользователь удален', async () => {
    const response = await AuthService.deletUser({
      uuid: uuidUser,
    })
    expect(response.status).toBe(200)
    expect(response.status).toBe(200)
  })
  it('Пользователь удален повторно', async () => {
    const response = await AuthService.deletUser({
      uuid: uuidUser,
    })
    expect(response.status).toBe(200)
  })
})
