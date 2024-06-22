import Joi from 'joi'

const userSchema = Joi.object({
   username: Joi.string().alphanum().min(5).max(30).required(),
   password : Joi.string().min(5).required(),
   role: Joi.string().valid('guest', 'admin').default('guest')
});

export default userSchema