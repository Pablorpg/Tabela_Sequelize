import { DataTypes } from "sequelize";
import { conn } from "../conn.js";

const Alunos = conn.define(
  "alunos",
  {
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alunos_id: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
  },
  {
    tableName: "alunos",
  }
);

// Definir relacionamento autorreferente depois da definição do modelo
Alunos.hasOne(Alunos, {
  foreignKey: 'alunos_id',
  as: 'perfil',
});

Alunos.belongsTo(Alunos, {
  foreignKey: 'alunos_id',
  as: 'referencia',
});

export default Alunos;