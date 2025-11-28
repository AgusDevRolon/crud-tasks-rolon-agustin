import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

export const task_model = sequelize.define(
  "Task",
  {
    title: { type: DataTypes.STRING(100), unique: true, allowNull: false },
    description: { type: DataTypes.STRING(100), allowNull: false },
    isComplete: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);



