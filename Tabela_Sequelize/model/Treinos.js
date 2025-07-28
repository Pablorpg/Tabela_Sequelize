import { DataTypes } from "sequelize";
import { conn } from "../conn.js";

const Treinos = conn.define(
    "treino",
    {
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        dt_inicio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nome_personal: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tableName: "treino",
    }
)

export default Treinos;