import { ParkingSpotService } from "../services/ParkingSpotService";
import { ICreateParkingSpot, IParkingSpot } from "../types";


export class ParkingSpotController {
    private parkingSpotService: ParkingSpotService;
    constructor(){
        this.parkingSpotService = new ParkingSpotService();
    } 

    async createParkingSpot(spotData: ICreateParkingSpot): Promise<IParkingSpot> {
        try{
            return await this.parkingSpotService.createParkingSpot(spotData);
        }catch(error){
            console.error(error);
            throw error;
        }       
    }
}