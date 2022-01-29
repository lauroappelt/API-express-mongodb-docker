import express from 'express'
import routes from './routes';
import './database';

// Setup da aplicação
const app = express();

// Middlewares de configuração
app.use(express.json());

// Rotas da aplciação
app.use(routes);

export default app;