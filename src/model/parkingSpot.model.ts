import mongoose, { Schema } from "mongoose";
import { IParkingSpot, ParkingSpotType } from "../types";

const parkinSpotModel = new Schema({
  spot_number: {
    type: String,
    required: true,
    unique: true,
  },
  size: {
    type: ParkingSpotType,
    required: true,
  },
  parking_floor: {
    type: Number,
    default: 0
  },
  occupied_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "parkingReservationModel",
    default: null
  }
});

parkinSpotModel.index({ is_available: 1 })
parkinSpotModel.index({ size: 1 })

export const ParkinSpot = mongoose.model<IParkingSpot>("parking_spot", parkinSpotModel);
