import mongoose, { Schema } from "mongoose";

const dispenserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    machineId: {
      type: Schema.Types.ObjectId,
      ref: 'Machine',
      required: true,
    },
    ingredient: {
      type: Schema.Types.ObjectId,
      ref: 'Ingredient',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

export const Dispenser = mongoose.model('Dispenser', dispenserSchema);
