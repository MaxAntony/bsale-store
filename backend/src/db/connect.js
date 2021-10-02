import { Sequelize } from 'sequelize';

const { DB_HOST: host, DB_USER: username, DB_PASSWORD: password, DB_NAME: database } = process.env;

const db = new Sequelize({
  host,
  username,
  password,
  database,
  dialect: 'mysql',
  define: { freezeTableName: true, underscored: true },
  logging: false,
});

async function connectDB() {
  try {
    await db.authenticate();
    console.log(`Connected to database ${database}`);
  } catch (e) {
    console.error('Cannt connect to db: ', e.message);
    throw new Error(e);
  }
}

connectDB();

export default db;
