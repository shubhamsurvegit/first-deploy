import Bull from 'bull'

const myFirstQueue = new Bull('my-first-queue',{redis:{port:6379,connectionName:'my-first-queue'}});
const mySecondQueue = new Bull('my-second-queue',{redis:{port:6379,connectionName:'my-second-queue'}});
// const mySecondQueue=[]


myFirstQueue.process(async (job) => {
  console.log('async code consumer')
  console.log(job.id)
});

myFirstQueue.on('completed', () => {
    console.log(`Job completed with result`);
  })



export default {myFirstQueue,mySecondQueue}
