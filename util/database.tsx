import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://admin:qwer1234@cluster0.c1s2x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const options = { useNewUrlParser: true };

// MongoClient 타입을 명시
let connectDB: Promise<MongoClient>;

declare global {
  // Global 객체에 _mongo 변수를 추가해 TypeScript에서 사용할 수 있게 선언
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