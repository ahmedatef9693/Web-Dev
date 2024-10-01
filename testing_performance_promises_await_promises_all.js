window.addEventListener("load", async function (event) {
  console.time("Fetching Data");

  let [data1, data2, data3] = await Promise.all([
    getData1(),
    getData2(),
    getData3(),
  ]);
  // slower than promise.all
  // but they have different scenarios if all requests are independent we run promise.all
  // if they are dependent we have to await for one to complete then make the other
  //   let data1 = await getData1();
  //   let data2 = await getData2();
  //   let data3 = await getData3();

  console.log(data1);
  console.log(data2);
  console.log(data3);

  console.timeEnd("Fetching Data");
});

async function getData1() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  response = await response.json();
  return update_length(response);
}

function getData2() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      data.length = 15;
      return data;
    });
}
async function getData3() {
  let response = await fetch("https://jsonplaceholder.typicode.com/photos");
  response = await response.json();
  return update_length(response);
}

function update_length(data) {
  data.length = 10;
  return data;
}
