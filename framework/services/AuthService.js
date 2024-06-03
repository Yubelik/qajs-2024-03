import config from '../config/config.js'
// console.log(
//   config.userName,
//   config.password,
//   `${config.baseURL}/Account/v1/GenerateToken`,
// )

const addUser = async (userName, password) => {
  const response = await fetch(`${config.baseURL}/Account/v1/User`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userName, password),
  })
  // console.log('userName = ', JSON.stringify(userName, password))
  return {
    headers: response.headers,
    status: response.status,
    data: await response.json(),
  }
}

const loginUser = async (userName, password) => {
  const response = await fetch(`${config.baseURL}/Account/v1/Login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userName, password),
  })
  // console.log('userName = ', JSON.stringify(userName, password))
  return {
    headers: response.headers,
    status: response.status,
    data: await response.json(),
  }
}

const generateToken = async (userName, password) => {
  const response = await fetch(`${config.baseURL}/Account/v1/GenerateToken`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userName, password),
  })
  // console.log('userName = ', JSON.stringify(userName, password))
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

const deletUser = async ({ uuid }) => {
  // console.log(
  //   'строчка с uuid для отправки = ' + `${config.baseURL}/v1/User/${uuid}`,
  // )
  const response = await fetch(`${config.baseURL}/v1/User/${uuid}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic VXNlcjpBYXNkYXNkXyEyMzEyMzE=',
    },
    body: 'false',
  })
  // console.log(response.statusText)
  console.log(response.status)
  return {
    // response,

    // headers: response.headers,
    status: response.status,
    // data: await response.json(),
  }
}

export default {
  addUser,
  loginUser,
  generateToken,
  authorized,
  deletUser,
}
