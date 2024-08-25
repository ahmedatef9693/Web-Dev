// const jobs = Array.from({ length: 100 }, () => 1e9);

// const tick = performance.now();
// function chunkify(array, n) {
//   let chunks = [];
//   for (let i = n; i > 0; i--) {
//     chunks.push(array.splice(0, Math.ceil(array.length / i)));
//   }
//   return chunks;
// }

// function runTasks() {
//   let chunks = chunkify(jobs, 2);
//   let completedWokeres = 0;

//   chunks.forEach((data, i) => {
//     const worker = new Worker("workers.js");
//     worker.postMessage(data);
//     worker.onmessage = (i) => {
//       console.log(`Worker ${i} Completed`);
//       completedWokeres++;

//       if (completedWokeres === 2) {
//         console.log(`Worker ${i} took ${performance.now() - tick} `);
//       }
//     };
//   });
// }
// runTasks();

const worker = new Worker("workers.js");
document.getElementById("toggle-color").addEventListener("click", function (e) {
  if (document.body.style.background !== "green") {
    document.body.style.background = "green";
  } else {
    document.body.style.background = "blue";
  }
});
worker.onmessage = function (message) {
  console.log(message.data);
};
document.getElementById("summations").addEventListener("click", function (e) {
  worker.postMessage("hello");
});
