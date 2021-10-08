export interface Config {
  mongodb: MongooseConfig;
}

export interface MongooseConfig {
  username: string;
  password: string;
  host: string;
  port: number;
  database: string;
}
