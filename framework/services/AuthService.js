import config from '../config/config.js'
// console.log(
//   config.userName,
//   config.password,
//   `${config.baseURL}/Account/v1/GenerateToken`,
// )

const generateToken = async (userName, password) => {
  const response = await fetch(`${config.baseURL}/Account/v1/GenerateToken`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userName, password),
  })
  console.log('userName = ', JSON.stringify(userName, password))
  return {
    headers: response.headers,
    status: response.status,
    data: await response.json(),
  }
}

const authorized = async ({ userName, password }) => {
  const response = await fetch(`${config.baseURL}/Account/v1/Authorized`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userName, password }),
  })

  return {
    headers: response.headers,
    status: response.status,
    data: await response.json(),
  }
}

export default {
  generateToken,
  authorized,
}
