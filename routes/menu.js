import db from '../services/menu.js';
import { Router } from 'express';

const router = Router();

router.post('/menu', async (req, res) => {
    try {
        const menu = await db.find({});
        res.send(menu);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router