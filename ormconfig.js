module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "pass123",
  database: "postgres",

  entities: ["src/**/*.entity.ts"],
  migrations: ["src/migrations/*.ts"],
  cli: {
    migrationsDir: "src/database/migrations",
  },
};
