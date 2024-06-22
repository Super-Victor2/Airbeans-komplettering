import Joi from 'joi';

const orderSchema = Joi.object({
    userId: Joi.string().required(),
    items: Joi.array().items(
        Joi.object({
            product: Joi.string().required(),
            quantity: Joi.number().integer().min(1).required(),
            price: Joi.number().precision(2).required()
        })
    ).required(),
    total: Joi.number().precision(2).required(),
    status: Joi.string().valid('Pending', 'Completed', 'Cancelled').default('Pending')
});

export default orderSchema;