"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPass = process.env.DB_PASSWORD;
const sequelize = new sequelize_1.Sequelize(dbName, dbUser, dbPass, {
    dialect: 'mysql',
    host: dbHost,
    logging: false
});
exports.default = sequelize;
