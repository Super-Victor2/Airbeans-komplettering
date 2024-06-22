import nedb from 'nedb-promises'
import { nanoid } from 'nanoid'

const database = new nedb({filename: 'users.db', autoload: true})

// Create new user
async function createUser(user) {
  const newUserId = nanoid(5)
  const newUser = {...user, userId: newUserId}
  const newInsertedUser = await database.insert(newUser)
  return newInsertedUser
}

// Find user
const findUser = async (username) => {
  console.log(username)
  const user = await database.findOne({username : username})
  console.log(user)
  return user
}


// Find userId
const findUserById = async (userId) => {
  const user = await database.findOne({_id : userId})
  return user
}

export { createUser, findUser, findUserById }