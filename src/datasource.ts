import { DataSource } from "typeorm";
import {join} from "path";
import 'dotenv/config';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.NODE_ENV === "development"? process.env.HOSTNAME_DEV:process.env.HOSTNAME_PROD,
    port: process.env.NODE_ENV === "test"? Number(process.env.TEST_DB_PORT || 5432):Number(process.env.DB_PORT || 5432),
    username: process.env.NODE_ENV === "test"? process.env.TEST_DB_USERNAME : process.env.DB_USERNAME,
    password: process.env.NODE_ENV === "test"? process.env.TEST_DB_PASSWORD : process.env.DB_PASSWORD,
    database: process.env.NODE_ENV === "test"? process.env.TEST_DB_NAME : process.env.DB_NAME,
    synchronize: true,//process.env.NODE_ENV === "test",
    logging: false,
    entities: process.env.NODE_ENV==="development"? [join(__dirname,"./entities/**/*.ts")]:["/build/entities/**/*.js"],
    subscribers: process.env.NODE_ENV==="development"? [join(__dirname,"./subscribers/**/*.ts")]:["/build/subscribers/**/*.js"],
    migrations:process.env.NODE_ENV==="developement"? [join(__dirname,"./migrations/**/*.ts")]:["/build/migrations/**/*.js"]
})