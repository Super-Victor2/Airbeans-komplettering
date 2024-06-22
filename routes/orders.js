import { Router } from 'express';
import { findOrders} from '../services/menu.js';
import { findUserById } from '../services/users.js';
import { findOrdersByUserId } from '../services/order.js';
import db from '../services/order.js'

const router = Router();

let cart = []
console.log(cart)

router.get('/orders',  async (req, res) => {
    const order = await findOrders(req.query.id);
    if(!order) {
        return res.status(400).json({ error: 'Can not find orders' })
    }
    res.json(order)
});

router.get('/orders/cart', (req, res) => {
    res.json(cart)
});

router.post('/orders/cart/', async (req, res) => {
    const { id, title, desc, price } = req.body;

    const { userId } = req.body;
    const user = await findUserById(userId);

    if(!user) {
        return res.status(400).json({ error: 'User not found'});
    } 

    if(id && title && desc && price) {
        const newCartItem = { id, title, desc, price };
        try {
            cart.push(newCartItem)
            res.status(201).json(newCartItem)
        } catch (error) {
            res.status(500).send(error)
        }
    } else {
        res.status(400).send('New cart item was not created');
    }
});

router.post('/orders/confirm/', async (req, res) => {
    const { userId } = req.body;
    const user = await findUserById(userId);

    if (!user) {
        return res.status(400).json({ error: 'User not found' });
    }

    try {
        const savedOrder = await db.insert({
            userId: userId,
            cart: cart,
        });

        res.json({
            message: 'Order found and saved',
            data: {
                user: userId,
                cart: cart,
                order: savedOrder,
            },
        });
    } catch (error) {
        res.status(400).json({ error: 'Failed to find and save order' });
    }
});

export default router