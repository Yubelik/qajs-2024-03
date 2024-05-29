import 'dotenv/config'

const config = {
  baseURL: 'https://bookstore.demoqa.com/Account/v1/User' ?? 'http://...',
  userName: 'admin',
  password: 'password',
}

export default Object.freeze(config)
