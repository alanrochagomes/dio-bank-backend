module.exports = {
  type: "sqlite",
  database: "./src/database/db.sqlite",
  migrations: ["./src/database/migrations"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};
