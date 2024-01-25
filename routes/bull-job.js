// routes/users.js
import express from "express";
const router = express.Router();
import queues from "../jobs/test-job.js";

// Define an API endpoint
router.get("/bull-job", async (req, res) => {
  try {
    console.log(queues.length);
    const users = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ];
    for (const queue of queues) {
      await queue.add(users);
      console.log(`Job added ${queue.name}`);
    }
    res.send("Jobs added to queue");
  } catch (err) {
    console.log(err);
    throw new Error("");
  }
});

router.get("/", async (req, res) => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ];
  res.send(users);
});

export default router;
