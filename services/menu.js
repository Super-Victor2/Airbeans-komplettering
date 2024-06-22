import nedb from 'nedb-promises';

const db = new nedb({ filename: 'menu.db', autoload: true });

const initialMenu = [
    { id: 1, title: "Bryggkaffe", desc: "Bryggd på månadens bönor.", price: 39 },
    { id: 2, title: "Caffè Doppio", desc: "Bryggd på månadens bönor.", price: 49 },
    { id: 3, title: "Cappuccino", desc: "Bryggd på månadens bönor.", price: 49 },
    { id: 4, title: "Latte Macchiato", desc: "Bryggd på månadens bönor.", price: 49 },
    { id: 5, title: "Kaffe Latte", desc: "Bryggd på månadens bönor.", price: 54 },
    { id: 6, title: "Cortado", desc: "Bryggd på månadens bönor.", price: 39 }
];

async function initializeDatabase() {
    try {
        const count = await db.count({});
        if (count === 0) {
            await db.insert(initialMenu);
            console.log('Initial menu data loaded');
        }
    } catch (error) {
        console.error(error);
    }
}

export async function findOrders(id) {
    console.log(id)
    const order = await db.findOne({id : id})
    console.log(order)
    return order
}

initializeDatabase();



export default db;
