import mongoose, { Schema } from "mongoose";
import { ICreateReservation, VehicleType } from "../types";


const parkingReservationModel = new Schema(
    {
        plate_number: {
            type: String,
            require
        },
        vehicle_type: {
            type: VehicleType,
            require
        },
        is_active: {
            type: Boolean
        },
        parking_spot: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "parkinSpotModel"
        }
    }
);
parkingReservationModel.index({status:1})

export const Reservation = mongoose.model<ICreateReservation>("parking_reservation", parkingReservationModel)