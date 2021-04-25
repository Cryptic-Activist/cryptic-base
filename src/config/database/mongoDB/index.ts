import mongoose from 'mongoose';

export const connectMongoDB = async (): Promise<void> => {
  try {
    const dbURI: string = process.env.MONGODB_URI;

    const conn = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(`[OK] MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
