import { Router } from "express";

class TweetRouter {
    /**
     * @type {Router}
     */
    router;

    constructor() {
        this.router = Router();
        this.#routes();
    }

    #routes() {
        this.router.get("/", async (req, res) => {
            // Fetch tweets from the database
            // Return the fetched tweets
            res.send("All tweets");
        });


    }
}

export default new TweetRouter().router;