import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  password: "2319",
  host: "localhost",
  port: 5432, // default Postgres port
  database: "mylibrary"
});

export async function query(text: string, params?: any[]) {
    return pool.query(text, params)
};