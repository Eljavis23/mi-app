const { Pool } = require('pg');
require('dotenv').config(); // Carga las variables del archivo .env

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Necesario para conectar a Neon
});

module.exports = pool;