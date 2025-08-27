import { ParkinSpotRepository } from "../repositioies/ParkingSpotRepository";
import { ReservationRepository } from "../repositioies/ReservationRepository";
import { ICreateParkingSpot, IGetSpotReq, IParkingSpot, ParkingSpotType, VehicleType } from "../types";


export class ParkingSpotService {
    private parkingRepo: ParkinSpotRepository;
    private reservationRepo: ReservationRepository;

    constructor(){
        this.parkingRepo = new ParkinSpotRepository();
        this.reservationRepo = new ReservationRepository();
    }

    async createParkingSpot(spotData: ICreateParkingSpot): Promise<IParkingSpot> {
        try{
            return await this.parkingRepo.create(spotData);
        }catch(error){
            console.error(error);
            throw error;
        }
    }

    async getParkingSpot(vehicleData: IGetSpotReq): Promise<IParkingSpot | null> {
        try{
            let spot: IParkingSpot | null;
            switch (vehicleData.vehicle_type) {
                case VehicleType.MOTORSYCLE:
                    spot = await this.parkingRepo.getSpot(ParkingSpotType.MOTORCYCLE);
                    break;
                case VehicleType.CAR:
                    spot = await this.parkingRepo.getSpot(ParkingSpotType.COMPACT);
                     break;
                default:
                      spot = await this.parkingRepo.getSpot(ParkingSpotType.LARGE);
                    break;
            
                }

            if(spot){
               const reservation  = await this.reservationRepo.create(vehicleData);
               spot.occupied_by = reservation._id;
               this.parkingRepo.update(spot._id,{occupied_by:reservation._id})

               return {
                    _id:reservation._id,
                    spot: spot.spot,
                    size: spot.size,
                    floor: spot.floor,
                    occupied_by: reservation._id
                }
            }
            
            return null;
        }catch(error){
            console.error(error);
            throw error;
        }
    }

    // async getSuitableSpot(parkingSpotTypeSize: ParkingSpotType): Promise<IParkingSpot | null> {
    //     let spot = await this.parkingRepo.getSpot(parkingSpotTypeSize);
    //     if(spot) return spot;
    //     spot = 
    // }

}