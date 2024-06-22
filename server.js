import express from 'express'
import apiMenuRouter from './routes/menu.js'
import apiOrderHistoryRouter from './routes/orderHistory.js'
import apiOrderRouter from './routes/orders.js'
import apiAuthRouter from './routes/auth.js'

// Start the server
const app = express();
const PORT = 8080;
global.user = null

//Middlewares
app.use(express.json())

//Routes
app.use('/api', apiMenuRouter)
app.use('/api', apiOrderHistoryRouter)
app.use('/api', apiOrderRouter)
app.use('/api', apiAuthRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});