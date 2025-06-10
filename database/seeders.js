// User seeder
const user1 = {
  username: "User1",
  email: "user1@example.com",
  password: "welcome123",
};

const user2 = {
  username: "User2",
  email: "user2@example.com",
  password: "welcome123",
};

const createUserStmt = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;

const recordSeeders = [
  {
    id: 1,
    dateTime: "2024-03-15 14:30:00",
    product: "Smart TV 55-inch",
    customerAge: 42,
    retailer: "Mega Electronics",
    customer_name: "John Smith",
    ic: "S1234567A",
    date_purchase: "2024-03-15 14:30:00",
    created_at: "2024-03-15 14:30:00",
  },
  {
    id: 2,
    dateTime: "2024-03-16 10:15:00",
    product: "Wireless Noise-Cancelling Headphones",
    customerAge: 29,
    retailer: "Tech Haven",
    customer_name: "Emily Wong",
    ic: "S7654321B",
    date_purchase: "2024-03-16 10:15:00",
    created_at: "2024-03-16 10:15:00",
  },
  {
    id: 3,
    dateTime: "2024-03-17 16:45:00",
    product: "Gaming Laptop",
    customerAge: 35,
    retailer: "Computer World",
    customer_name: "Michael Lee",
    ic: "S2468135C",
    date_purchase: "2024-03-17 16:45:00",
    created_at: "2024-03-17 16:45:00",
  },
  {
    id: 4,
    dateTime: "2024-03-18 11:20:00",
    product: "Smart Home Security System",
    customerAge: 53,
    retailer: "Home Tech Solutions",
    customer_name: "Sarah Tan",
    ic: "S9876543D",
    date_purchase: "2024-03-18 11:20:00",
    created_at: "2024-03-18 11:20:00",
  },
  {
    id: 5,
    dateTime: "2024-03-19 13:00:00",
    product: "Fitness Smartwatch",
    customerAge: 26,
    retailer: "Active Gear Store",
    customer_name: "Alex Ng",
    ic: "S5432167E",
    date_purchase: "2024-03-19 13:00:00",
    created_at: "2024-03-19 13:00:00",
  },
  {
    id: 6,
    dateTime: "2024-03-20 09:50:00",
    product: "4K Drone Camera",
    customerAge: 38,
    retailer: "Photo Pro Shop",
    customer_name: "Rachel Chew",
    ic: "S3141592F",
    date_purchase: "2024-03-20 09:50:00",
    created_at: "2024-03-20 09:50:00",
  },
  {
    id: 7,
    dateTime: "2024-03-21 15:30:00",
    product: "Electric Mountain Bike",
    customerAge: 45,
    retailer: "Cycle Masters",
    customer_name: "David Kumar",
    ic: "S2718281G",
    date_purchase: "2024-03-21 15:30:00",
    created_at: "2024-03-21 15:30:00",
  },
  {
    id: 8,
    dateTime: "2024-03-22 12:10:00",
    product: "Professional DSLR Camera",
    customerAge: 33,
    retailer: "Capture Point",
    customer_name: "Lisa Ng",
    ic: "S1618033H",
    date_purchase: "2024-03-22 12:10:00",
    created_at: "2024-03-22 12:10:00",
  },
  {
    id: 9,
    dateTime: "2024-03-23 17:25:00",
    product: "Smart Kitchen Appliance Set",
    customerAge: 48,
    retailer: "Kitchen Innovations",
    customer_name: "Robert Tan",
    ic: "S1414213I",
    date_purchase: "2024-03-23 17:25:00",
    created_at: "2024-03-23 17:25:00",
  },
  {
    id: 10,
    dateTime: "2024-03-24 14:40:00",
    product: "Home Theater Sound System",
    customerAge: 41,
    retailer: "Sound Wave Electronics",
    customer_name: "Jennifer Lim",
    ic: "S1732050J",
    date_purchase: "2024-03-24 14:40:00",
    created_at: "2024-03-24 14:40:00",
  },
];

const createRecordsStmt = `
  INSERT INTO records 
  (id, dateTime, product, customerAge, customer_name, ic, retailer, date_purchase, created_at) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

// Cigarettes
const cigarettesSeeder = [
  {
    id: "1",
    name: "Marlboro Red",
    manufactured_date: "2024-03-27T10:00:00Z",
    factory: "Philip Morris International",
  },
  {
    id: "2",
    name: "Camel",
    manufactured_date: "2024-03-26T12:30:00Z",
    factory: "Japan Tobacco International",
  },
  {
    id: "3",
    name: "Lucky Strike",
    manufactured_date: "2024-03-25T15:45:00Z",
    factory: "British American Tobacco",
  },
  {
    id: "4",
    name: "Winston",
    manufactured_date: "2024-03-24T09:20:00Z",
    factory: "ITG Brands",
  },
  {
    id: "5",
    name: "Pall Mall",
    manufactured_date: "2024-03-23T08:10:00Z",
    factory: "British American Tobacco",
  },
  {
    id: "6",
    name: "Parliament",
    manufactured_date: "2024-03-22T14:05:00Z",
    factory: "Philip Morris International",
  },
  {
    id: "7",
    name: "Kent",
    manufactured_date: "2024-03-21T17:30:00Z",
    factory: "British American Tobacco",
  },
  {
    id: "8",
    name: "Newport",
    manufactured_date: "2024-03-20T11:50:00Z",
    factory: "ITG Brands",
  },
  {
    id: "9",
    name: "Dunhill",
    manufactured_date: "2024-03-19T13:40:00Z",
    factory: "British American Tobacco",
  },
  {
    id: "10",
    name: "L&M",
    manufactured_date: "2024-03-18T16:55:00Z",
    factory: "Philip Morris International",
  },
];

const createCigaretteStmt = `INSERT INTO cigarettes ( 
   id, name, manufactured_date, factory) VALUES (?, ?, ?, ?)`;

module.exports = {
  user1,
  user2,
  recordSeeders,
  cigarettesSeeder,
  createRecordsStmt,
  createUserStmt,
  createCigaretteStmt,
};
