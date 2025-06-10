const usersTable = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`;

const recordsTable = `CREATE TABLE IF NOT EXISTS records (
    id INTEGER PRIMARY KEY NOT NULL,
    dateTime DATETIME NOT NULL,
    product TEXT NOT NULL,
    customerAge INTEGER NOT NULL,
    customer_name TEXT NOT NULL,
    ic TEXT NOT NULL,
    retailer TEXT NOT NULL,
    date_purchase DATETIME NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`;

const cigarattesTable = `CREATE TABLE IF NOT EXISTS cigarettes (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  manufactured_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  factory TEXT NOT NULL
)`

module.exports = {
  usersTable,
  recordsTable,
  cigarattesTable
};
