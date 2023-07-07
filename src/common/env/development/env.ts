import * as dotenv from "dotenv";
import * as path from "path";

const envPath = path.resolve(__dirname, "../../../..", ".env");
dotenv.config({ path: envPath });

const {
  SERVER_PORT,
  DATABASE_TYPE,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
} = process.env;

export const development = {
  SERVER_PORT,
  DATABASE_TYPE,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
};
