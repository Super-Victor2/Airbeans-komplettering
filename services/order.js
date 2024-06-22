import nedb from 'nedb-promises';

const db = new nedb({ filename: 'order.db', autoload: true });

export async function findOrdersByUserId(userId) {
    return await db.find({ userId }, { orderId: 0 });
}

export default db;