// utils/redisClient.ts
import Redis from "ioredis";

const redis = new Redis({
  host: "redis", // or your Redis host
  port: 6379,        // default Redis port
});

export default redis;
