import { Router } from 'express';
import { findOrdersByUserId } from '../services/order.js';
import { findUserById } from '../services/users.js';

const router = Router();

router.get('/orders/', async (req, res) => {
    const { userId } = req.body;
    const user = await findUserById(userId);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    try {
        const orders = await findOrdersByUserId(userId);
        res.json({
            message: 'Orders retrieved successfully',
            data: {
                user: userId,
                orders: orders,
            },
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve orders' });
    }
});

export default router