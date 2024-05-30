import AuthService from '../framework/services/AuthService.js'
import config from '../framework/config/config.js'

describe('Авторизация', () => {
  it('Успешная авторизация', async () => {
    const response = await AuthService.authorized({
      userName: config.userName,
      password: config.password,
    })
    // console.log('userName', config.userName)
    // console.log('password', config.password)
    console.log('response.data.result', response)
    expect(response.status).toBe(200)
    expect(response.data).toBe(true)
    // expect(response.data.token).toBeDefined()
  })

  //   it('Нельзя авторизоваться без пароля', async () => {
  //     const response = await AuthService.authorized({
  //       userName: config.userName,
  //       password: '',
  //     })
  //     expect(response.status).toBe(400)
  //     expect(response.data.code).toBe('1200')
  //     expect(response.data.message).toBe('UserName and Password required.')
  //   })
})
