
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
);
export const startDB = async () =>{
    try{
        await sequelize.authenticate();
        console.log("Conexion establecida");
        await sequelize.sync();
    } catch (error) {
        console.error("no fue posible la conexion con la base de datos.", error);
    }
};