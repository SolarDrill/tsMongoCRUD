import mongoose from "mongoose";
import dotenv from "dotenv";

export const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://root:example@localhost:27017/alterna?authMechanism=DEFAULT&authSource=admin');
    console.log("DB online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de iniciar la BD ver logs");
  }
}