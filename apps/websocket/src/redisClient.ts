// utils/redisClient.ts
import Redis from "ioredis";

const redis = new Redis({
  host: "localhost", // or your Redis host
  port: 6379,        // default Redis port
  // password: "yourpassword", // if needed
});

export default redis;
