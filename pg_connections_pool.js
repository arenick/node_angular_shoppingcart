"use strict";
const pg = require("pg");

const pool = new pg.Pool({
  user: "postgres",
  password: "Password",
  host: "localhost",
  port: 5432,
  database: "ExpressShopDC",
  ssl: false
});

module.exports = pool;