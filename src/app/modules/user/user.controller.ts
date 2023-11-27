import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const { userData: userData } = req.body;

    const result = await UserServices.createUserIntoDB(userData);
    res.status(200).json({
      success: true,
      message: "User is created succesfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
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
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const numericId = parseInt(userId);
    const result = await UserServices.getSingleUsersFromDB(numericId);
    res.status(200).json({
      success: true,
      message: "User is fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const numericId = parseInt(userId);
    const result = await UserServices.deleteUserDataFromDB(numericId);
    res.status(200).json({
      success: true,
      message: "User is deleted successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
};
