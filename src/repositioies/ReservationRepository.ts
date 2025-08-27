import { Reservation } from "../model/parkingReservation.model";
import { ICreateReservation, IGetSpotReq, IReservation } from "../types";

export class ReservationRepository {

    async create(reservationData: IGetSpotReq):Promise<IReservation> {
        try{
            const reservation = new Reservation(reservationData);
          return await reservation.save();
        }catch(error){
            console.error("Error creating parking spot in databace",error)
            throw error;
        }
    }

}