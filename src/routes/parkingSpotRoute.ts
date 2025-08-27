import { Router } from "express";
import { ParkingSpotController } from "../controllers/ParkingSpotController";


const router = Router();
const parkingSpotController = new ParkingSpotController();

router.post("/spots/create", parkingSpotController.createParkingSpot);
router.post("/spots/reserve", parkingSpotController.createParkingSpot);

export default router;