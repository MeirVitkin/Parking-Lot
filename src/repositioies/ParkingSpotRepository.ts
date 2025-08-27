import { Types } from "mongoose";
import { ParkinSpot } from "../model/parkingSpot.model";
import { ICreateParkingSpot, IParkingSpot, ParkingSpotType } from "../types";

export class ParkinSpotRepository {
    async create(parkingData: ICreateParkingSpot):Promise<IParkingSpot> {
        try{
            const parkingSpot = new ParkinSpot(parkingData);
          return await parkingSpot.save();
        }catch(error){
            console.error("Error creating parking spot in databace",error)
            throw error;
        }
    }

   async update(id: Types.ObjectId, updateData: Partial<IParkingSpot>): Promise<IParkingSpot | null> {
    try {
        const updatedSpot = await ParkinSpot.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );
        
        if (!updatedSpot) {
            throw Error('Parking spot not found');
        }
        
        return updatedSpot;
    } catch(error) {
        console.error("Error updating parking spot in database", error);
        throw error;
    }
}
    // async getAll(size: ParkinSpotType): Promise<IParkingSpot[]> {
    //     try{
    //         return await ParkinSpot.find({occupied_by: null ,size})
    //     }catch(error){
    //         console.error(error);
    //         throw error;
    //     }
    // }
    
    async getSpot(size: ParkingSpotType): Promise<IParkingSpot | null> {
        try{
            return await ParkinSpot.findOne({occupied_by: null, size})
        }catch(error){
            console.error(error);
            throw error;
        }
    }
}