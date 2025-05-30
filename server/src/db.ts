import { Pool } from "pg";
import envioroments from "./enviorments";

const pool = new Pool({
  user: envioroments.USER,
  password: envioroments.PASSWORD,
  host: envioroments.HOST,
  port: envioroments.PORT, // default Postgres port
  database: envioroments.DATABASE
});   

export async function query(text: string, params?: any[]) {
    return pool.query(text, params)
};