import express from 'express'
import apiMenuRouter from './routes/menu.js'

// Start the server
const app = express();
const PORT = 8080;
global.user = null

//Routes
app.use('/api', apiMenuRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});