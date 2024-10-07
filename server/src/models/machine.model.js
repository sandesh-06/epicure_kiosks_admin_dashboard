import mongoose, { Schema } from "mongoose";

const machineSchema = new Schema(
    {
      machineId: {
        type: String,
        required: true,
        unique: true,
      },
      name: {
        type: String,
        required: true,
      },
      status: {
        temperature: { type: String, required: true },
        operational: { type: Boolean, required: true }
      },
      dispensers: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Dispenser', 
        }
      ],
      recipes: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Recipe', 
        }
      ]
    },
    { timestamps: true }
  );
  
  export const Machine = mongoose.model('Machine', machineSchema);
  