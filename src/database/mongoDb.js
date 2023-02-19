import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './environment/.env.dev' });

// prettier-ignore
export default async function connectToDb() {
  return new Promise((resolve) => {
    resolve(mongoose
      .set('strictQuery', false)
      .connect(process.env.DB_HOST))
      .catch((error) => {
        throw new Error('Unable to connect to MongoDB')
      });
  });
}
