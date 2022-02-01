import express from 'express'
import route from './routes';
import './database';

class App {
    constructor(){
        // Setup da aplicação
        this.server = express();

        this.routes();
    }

    routes() {
        this.server.use(route);
    }
}

export default new App().server;