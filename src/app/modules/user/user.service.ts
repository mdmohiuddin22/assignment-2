import { UserDataModel } from "../user.model";
import { UserData } from "./user.interface";

const createUserIntoDB = async (userData: UserData) => {
  const result = await UserDataModel.create(userData);
  return result;
};
const getAllUsersFromDB = async () => {
  const result = await UserDataModel.find();
  return result;
};
const getSingleUsersFromDB = async (userId: number) => {
  const result = await UserDataModel.find({ userId: userId });
  // const result = await UserDataModel.aggregate([{ $match: { id: id } }]);
  return result;
};

const deleteUserDataFromDB = async (id: number) => {
  const result = await UserDataModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUsersFromDB,
  deleteUserDataFromDB,
};
