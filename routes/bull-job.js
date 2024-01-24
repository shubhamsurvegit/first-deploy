// routes/users.js
import express from 'express'
import queue from '../jobs/test-job.js';
const router = express.Router();


// Define an API endpoint
router.get('/bull-job',async (req, res) => {
    const {myFirstQueue}=queue
  const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
  const job = await myFirstQueue.add(users);
  res.send('Job added to queue')
});

router.get('/',async (req, res) => {    
  const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
  res.send(users)
});



export default router
