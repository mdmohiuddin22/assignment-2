import { Schema, model } from "mongoose";
import { UserData } from "./user/user.interface";

const UserDataSchema = new Schema<UserData>({
  userId: { type: Number, required: true, unique: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  isActive: ["active", "inActive"],
  hobbies: { type: [], required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  orders: [
    {
      productName: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

export const UserDataModel = model<UserData>("UserData", UserDataSchema);
