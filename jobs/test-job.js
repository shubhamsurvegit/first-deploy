import Bull from "bull";
import dotenv from "dotenv";
dotenv.config();

const MY_QUEUE = "MY-QUEUE";
const queues = [];
for (let i = 0; i < process.env.REDIS_NUMBER_OF_QUEUE; i++) {
  console.log(i);
  const queue = new Bull(`${MY_QUEUE}-${i}`, {
    redis: {
      port: process.env.REDIS_PORT,
      username: process.env.REDIS_USERNAME,
      password: process.env.REDIS_PASSWORD,
      host: process.env.REDIS_HOST,
      tls: { rejectUnauthorized: false },
    },
  });
  queues.push(queue);
}

for (const queue of queues) {
  queue.process(async (job) => {
    console.log(
      `Async consumer execution for id ${job.id} and name ${job.queue.name}`
    );
  });

  queue.on("completed", (job) => {
    console.log(
      `Job completed id ${job.id} , name ${job.queue.name} and data ${JSON.stringify(job.data)}`
    );
  });
  queue.on("error", (error) => {
    console.log(error);
  });
}

export default queues;
