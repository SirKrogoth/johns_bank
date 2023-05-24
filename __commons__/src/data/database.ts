import { Sequelize } from "sequelize";

const dbName = process.env.DB_NAME!;
const dbUser = process.env.DB_USER!;
const dbHost = process.env.DB_HOST;
const dbPass = process.env.DB_PASS;

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    dialect: 'mysql',
    host: dbHost,
    logging: false
});

export default sequelize;