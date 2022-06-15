import { Pool } from "pg";
import * as dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
  user: process.env.USER_DB,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  database: process.env.DB_POSG,
  port: 5432,
});
try {
  console.log("Connecting to database...");
} catch (error) {
  console.log("Error connecting to database...");
}

