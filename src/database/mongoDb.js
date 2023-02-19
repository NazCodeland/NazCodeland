import mongoose from 'mongoose';

export default async function connectToDb() {
  // prettier-ignore
  await mongoose
    .set('strictQuery', false)
    .connect('mongodb+srv://nazcodeland:Rit1O5TLMZz3nAec@nazcodeland.v9cfkup.mongodb.net/blog')
}
