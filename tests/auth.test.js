import AuthService from '../framework/services/AuthService.js'
import config from '../framework/config/config.js'
let uuidUser
describe('Создание пользователя', () => {
  // it('Пользователь успешно создан', async () => {
  //   const response = await AuthService.addUser({
  //     userName: config.userName,
  //     password: config.password,
  //   })
  //   // console.log('response', response)
  //   expect(response.status).toBe(200)
  //   expect(response.data).toBe(true)
  // })
  it('Пользователь существует', async () => {
    const response = await AuthService.addUser({
      userName: config.userName,
      password: config.password,
    })
    // console.log('response', response)
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
    // expect(response.data).toBe(true)
    uuidUser = response.data.userId

    // expect(response.data.token).toBeDefined()
  })
})

describe('Авторизация', () => {
  it('Успешная авторизация', async () => {
    const response = await AuthService.authorized({
      userName: config.userName,
      password: config.password,
    })
    // console.log('response authorized', response)
    expect(response.status).toBe(200)
    expect(response.data).toBe(true)
    // expect(response.data.token).toBeDefined()
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
    // console.log('uuidUser', uuidUser)
    const response = await AuthService.deletUser({
      uuid: uuidUser,
    })
    // console.log('response пользователь удален =', response)
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
