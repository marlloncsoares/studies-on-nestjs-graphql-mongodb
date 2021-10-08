import { Config } from './config.interface';

const config: Config = {
  mongodb: {
    username: process.env.MONGODB_USERNAME,
    password: process.env.MONGODB_PASSWORD,
    host: process.env.MONGODB_HOST,
    port: parseInt(process.env.MONGODB_PORT),
    database: process.env.MONGODB_DATABASE,
  },
};

export default config;
