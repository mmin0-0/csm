import { MongoClient, MongoClientOptions} from 'mongodb';

const url: string process.env.MONGODB_URL || '';
const options: MongoClientOptions = { useNewUrlParser: true };

let connectDB: Promise<MongoClient>;

declare global {
  var _mongo: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };