import { DataTypes } from "sequelize";
import { conn } from "../conn.js";

const Execicios = conn.define(
    "execicios",
    {
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        grupo_muscular: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
    },
    {
        tableName: "execicios",
    }
)

export default Execicios;