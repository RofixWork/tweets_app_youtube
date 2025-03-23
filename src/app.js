import 'express-async-errors';
import 'dotenv/config';
import express from 'express';
import Middleware from './middlewares/index.js';
import {connect} from 'mongoose'
import tweetRouter from './routes/tweet.route.js'
import morgan from 'morgan';
class Application {
    #PORT = process.env.PORT || 3000;
    #messageRunning = `Server running at: http://localhost:${this.#PORT}`;
    #connectionString = process.env.MONGO_URI;
    #environment = process.env.NODE_ENV || 'development';
    /**
     * @type {import('express').Express}
     */
    #app;

    constructor() {
        this.#app = express();
        this.#middlewares();
        this.#routes();
        this.#customMiddlewares();
    }

    #routes() {
        this.#app.get('/', async (req, res) => {
            return res.send('Hello, World!');
        });

        this.#app.use('/api/tweets', tweetRouter);
        
    }

    #middlewares() {
        this.#app.use(express.json());

        if(this.#environment === 'development') {
            this.#app.use(morgan('dev'));
        }
    }

    #customMiddlewares() {
        this.#app.use(Middleware.notFound)
        this.#app.use(Middleware.errorHandler)
    }

    async start() {
        try {
            //connect to db
            await connect(this.#connectionString);
            console.log("Conencted to the database...");
            
            this.#app.listen(this.#PORT, err => {
                if(err)  throw err;

                console.log(this.#messageRunning);
            })
        } catch (error) {
            console.error(error);
            
        }
    }
}

const app = new Application();
app.start();