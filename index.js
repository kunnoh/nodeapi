const express = require('express');
require('dotenv').config();
const cors = require('cors');

// routes
const authRoute = require("./src/routes/auth.route.js");


// middlewares

const app = express();

app.use(cors({
    origin: 'localhost:4200'
}));
app.use('/auth', authRoute);
app.use('**', (req, res) => {
    res.status(200).json({message: "humidorcode api"});
    return;
});

const port = process.env.PORT || 7890;

app.listen(port, () => console.log(`[server]: Server is running at http://localhost:${port}`));