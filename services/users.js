import nedb from 'nedb-promises'
import { nanoid } from 'nanoid'

const db = new nedb({filename: 'users.db', autoload: true})

// Create new user
async function createUser(user) {
  const newUserId = nanoid(5)
  const newUser = {...user, userId: newUserId}
  const newInsertedUser = await db.insert(newUser)
  return newInsertedUser
}

// Find user
const findUser = async (username) => {
  console.log(username);
  const user = await db.findOne({username : username});
  console.log(user);
  return user;
}

async function findUsers() {
  const users = await db.find({});
  console.log(users);
  return users;
}

// Find userId
const findUserById = async (userId) => {
  const user = await db.findOne({_id : userId});
  return user;
}

export { createUser, findUser, findUserById, findUsers };