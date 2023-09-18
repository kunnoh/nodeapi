import { application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = application();

// middlewares
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
);

// routes
import authRoute from './src/routes/auth.route.js';
import prodRoute from './src/routes/product.route.js';

// app.use(compression());
app.use('/auth', authRoute);
app.use('/product', prodRoute);
app.use('**', (req, res) =>
    res.status(200).json({ status: 'success', message: 'Welcome to nodeapi' })
);

const port = process.env.PORT || 7890

app.listen(port, () =>
    console.log(`[server]: Server is running at http://localhost:${port}`)
);
