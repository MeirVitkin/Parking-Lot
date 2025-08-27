import mongoose from "mongoose";

export enum VehicleType {
MOTORSYCLE = "motorsycle",
CAR = "car",
VAN = "van"
}

export enum ParkingSpotType {
    MOTORCYCLE = "motorsycle",
    COMPACT = "compact",
    LARGE = "larg"
}

// export enum ReservationStatus {
//     ACTIVE = "active",
//     COMPLETED ="completed"
// }

export interface ICreateParkingSpot {
    spot: string;
    size: ParkingSpotType;
    floor?: number
}

export interface ICreateReservation {
    plate_number: string;
    vehicle_type: VehicleType;
    is_active: boolean;
}

export interface IReservation {
    _id:mongoose.Types.ObjectId,
    plate_number: string;
    vehicle_type: VehicleType;
    is_active: boolean;
}

export interface IReservationResponce {
    _id:mongoose.Types.ObjectId,
    spot: string;
    floor?: number;
    is_active: boolean;
}

export interface IParkingSpot {
    _id:mongoose.Types.ObjectId,
    spot: string;
    size: ParkingSpotType;
    floor?: number;
    occupied_by: mongoose.Types.ObjectId | null;
}

export interface IGetSpotReq {
    licence_plate:string;
    vehicle_type: VehicleType;
}