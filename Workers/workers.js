// onmessage = (jobs) => {
//   for (const job of jobs.data) {
//     let sum = 0;
//     for (let index = 0; index < job; index++) {
//       sum += 1;
//     }
//   }
//   postMessage("Done");
// };

// // console.log(`Main Thread Took ${tock - tick} ms`);

onmessage = function (message) {
  let sum = 0;

  for (let index = 0; index < 1e10; index++) {
    sum += index;
  }
  postMessage(sum);
};
