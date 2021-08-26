const faker = require('faker')

module.exports = () => {
  const numberOfUsers = faker.datatype.number(30)
  const users = []

  for (let i = 0; i <= numberOfUsers; i++) {
    users.push({
      name: faker.name.firstName(),
      username: faker.internet.userName(),
      phone: faker.phone.phoneNumberFormat()
    })
  }

  return users
}