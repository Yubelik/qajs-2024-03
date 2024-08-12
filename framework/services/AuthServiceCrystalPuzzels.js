import config from '../config/configCrystalPuzzels.js'
// import supertest from 'supertest'
import axios from 'axios'

const addUser = async (userName, password) => {
  const response = await fetch(`${config.baseURL}/Account/v1/User`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userName, password),
  })

  return {
    headers: response.headers,
    status: response.status,
    data: await response.json(),
  }
}

const loginUser = async ({ userName, password }) => {
  const options = {
    method: 'POST',
    url: `${config.baseURL}api/v1/auth/login/`,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: { username: userName, password: password },
  }

  await axios
    .request(options)
    .then(function (response) {
      // console.log(response.status)
      // console.log(response.data)
      // console.log(response.data.access_token)
      return {
        response,
        // headers: response.headers,
        // status: response.status,
        // access_token: response.data.access_token,
      }
    })
    .catch(function (error) {
      console.error(error)
    })

  // const response = await fetch(`${config.baseURL}api/v1/auth/login/`, {
  //   // const response = await fetch(`${config.baseURL}/api/v1/auth/login/`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //   body: new URLSearchParams({
  //     username: userName,
  //     password: password,
  //   }),
  // })
  // let commits = response.json()
  // console.log('commits = ' + commits)
}
// console.log('userName, password = ' + config.username + config.password)
// const responseLoginUser = loginUser(config.username, config.password)
// console.log('responseLoginUser = ' + responseLoginUser)

const generateToken = async (userName, password) => {
  const response = await fetch(`${config.baseURL}/Account/v1/GenerateToken`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userName, password),
  })

  return {
    headers: response.headers,
    status: response.status,
    data: await response.json(),
  }
}

const authorized = async (userName, password) => {
  const response = await fetch(`${config.baseURL}/Account/v1/Authorized`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: await JSON.stringify(userName, password),
  })

  return {
    headers: response.headers,
    status: response.status,
    data: await response.json(),
  }
}

const deletUser = async ({ uuid }) => {
  const response = await fetch(`${config.baseURL}/v1/User/${uuid}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic VXNlcjpBYXNkYXNkXyEyMzEyMzE=',
    },
    body: 'false',
  })
  return {
    status: response.status,
  }
}

export default {
  // addUser,
  loginUser,
  // generateToken,
  // authorized,
  // deletUser,
}

// const response = await loginUser({})
// console.log(response.headers)
// console.log('status = ' + response.status)
// console.log(response.data)

// import 'dotenv/config'

// consol.log(' env = ' + config)
