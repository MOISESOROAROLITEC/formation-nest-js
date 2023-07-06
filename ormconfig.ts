// module.exports = {
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "pass123",
//   database: "postgres",
//   entities: ["dist/**/*.entity.js"],
//   migrations: ["dist/migrations/*.js"],
//   cli: {
//     migrationsDir: 'src/migrations/migrations'
//   }
// }
const type = process.env.DATABASE_TYPE;
console.log("l'erreur : ", {
  type: type,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_USER,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
});

const config = {
  type: process.env.DATABASE_TYPE,
  host: process.env.POSTGRES_IP,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,

  entities: ["dist/**/*.entity.js"],
  synchronize: false,
  migrationsRun: false,
  logging: false,
  migrations: ["dist/migrations/*.js"],
  cli: {
    migrationsDir: "src/database/migrations",
  },
};

module.exports = config;
