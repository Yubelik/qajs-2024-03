import 'dotenv/config'

const config = {
  basedUrl: 'https://bookstore.demoqa.com/Account/v1/User' ?? 'http://...',
  userName: 'admin',
  password: 'password',
}

console.log(config)

export default Object.freeze(config)
