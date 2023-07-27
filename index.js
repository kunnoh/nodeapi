const express = require('express')
require('dotenv').config()
const cors = require('cors')

// routes
const authRoute = require('./src/routes/auth.route.js')
const prodRoute = require('./src/routes/product.route.js')

// middlewares

const app = express()

app.use(express.json({ limit: '50mb' }))
app.use(
    express.urlencoded({
        extended: true,
        limit: '20mb',
        allowedHeaders: 'Content-Type, Authorization, RefreshTtoken',
    })
)
app.use(
    cors({
        origin: '*',
    })
)
// app.use(compression());
app.use('/auth', authRoute)
app.use('/product', prodRoute)
app.use('**', (req, res) =>
    res.status(200).json({ status: 'success', message: 'Welcome to nodeapi' })
)

const port = process.env.PORT || 7890

app.listen(port, () =>
    console.log(`[server]: Server is running at http://localhost:${port}`)
)
