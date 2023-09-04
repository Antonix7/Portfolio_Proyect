import express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath } from 'url';
import mainRoutes from './routes/main.routes.js';

// Settings
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;

// Midlewares
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(mainRoutes)
app.use(express.static(join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`server on port: http://localhost:${port}`)
})