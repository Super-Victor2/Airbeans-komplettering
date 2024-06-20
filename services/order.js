import nedb from 'nedb-promises';

const db = new nedb({ filename: 'order.db', autoload: true});

export default db