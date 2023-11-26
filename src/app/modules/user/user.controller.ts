import { Request, Response } from "express";
import { UserServices } from "./user.service";
import { type } from "os";

const createUser = async (req: Request, res: Response) => {
  try {
    const { userData: userData } = req.body;

    const result = await UserServices.createUserIntoDB(userData);
    res.status(200).json({
      success: true,
      message: "User is created succesfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // const numericId = parseInt(id);
    const result = await UserServices.getSingleUsersFromDB(id);
    res.status(200).json({
      success: true,
      message: "User is fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
};