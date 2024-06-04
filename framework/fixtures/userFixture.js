import faker from '@faker-js/faker'

export default function generateUserCredentials() {
  return {
    userName: faker.internet.email(),
    password: 'P@ssw0rd',
  }
}

console.log(generateUserCredentials())
