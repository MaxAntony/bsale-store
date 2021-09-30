import { Sequelize } from 'sequelize';

const {} = process.env

const db = new Sequelize({ host, username, password, database });

async function connectDB() {
  try {
    await db.authenticate();
  } catch (e) {
    console.error('Cannt connect to db: ', e.message);
    throw new Error(e);
  }
}

connectDB();

export default db;
