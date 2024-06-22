import { Router } from 'express'
import { createUser, findUser } from '../services/users.js'
import validate from '../middlewares/validate.js'

const router = Router()

// Register new user
router.post('/auth/register', validate, async (req, res) => {
    const user = await findUser(req.body.username)
     
    if (user) {
        return res.status(400).json({ error: 'sorry user already exists' })
    }
    const newUser = await createUser(req.body)
   
    const response = {
        success: true,
        status: 201,
        message: 'user created successfully',
        data: newUser
        
    }
    res.json(response)
});

// User login
router.post('/auth/login', validate, async (req, res) => {
   
    const user = await findUser(req.body.username)
    if (!user) {
        
        return res.status(400).json({ error: 'Sorry user dont exists' })
    
    
    } else if (user.password !== req.body.password) {

        return res.status(400).json({ error: 'The password is incorrect' })
    }
    
    global.user = user
    
    const response = {
        success: true,
        status: 200,
        message: 'User logged in',
        data: user
        
    }
    res.json(response)

});

export default router