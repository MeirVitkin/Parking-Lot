import express, { Application } from "express";
import router from "./routes/parkingSpotRoute";


class Server {
    private app: Application;

    constructor(){
        this.app = express();
        this.app.use("/api/.parkinglot", router)
    }
}