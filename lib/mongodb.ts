import { MongoClient, Db } from 'mongodb';

if (!process.env.MONGODB_URI) {
  console.warn('⚠️  MongoDB URI not found in environment variables. Database features will be unavailable.');
}


const uri: string = process.env.MONGODB_URI || '';
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient> | null = null;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// Only initialize MongoDB if URI is available
if (uri) {
  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable to preserve the value
    // across module reloads caused by HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    // In production mode, it's best not to use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
} else {
  console.log('📦 Building without MongoDB connection (URI not provided)');
}

export default clientPromise;

// Helper function to get database
export async function getDatabase(): Promise<Db> {
  if (!clientPromise) {
    throw new Error('MongoDB client not initialized. Please check MONGODB_URI environment variable.');
  }
  const client = await clientPromise;
  return client.db('lfllogistics');
}
