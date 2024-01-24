// main file (e.g., app.js or index.js)
import express from 'express'
import router from './routes/bull-job.js';

const app = express();

app.use("/", router); // Use the userRoutes for paths starting with /api
app.use("/",router)

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
