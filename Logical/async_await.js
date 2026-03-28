const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000);
});

async function getData() {
  return p;
}

const data = getData();
console.log(data); // Promise { 'Deependra' }
data.then((res) => console.log(res)); // Deependra

async function getDataWithAwait() {
  const result = await p;
  console.log("waiting for promise to get resolve");

  return result;
}

const dataWithAwait = getDataWithAwait();
console.log(dataWithAwait);

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved 1");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved 2");
  }, 5000);
});

// If we reverse the order of p1 and p2, then p2 will resolve first and we will get "Promise resolved 2" before "Promise resolved 1". The order of resolution depends on the time specified in the setTimeout function for each promise.

async function getMultipleData() {
  console.log("Hello JavaScript");

  const result1 = await p1;
  console.log("Hello JS 1");
  console.log(result1);

  const result2 = await p2;
  console.log("Hello JS 2");
  console.log(result2);
}

getMultipleData();

const API_URL = "https://api.github.com/users/bharti277";

async function fetchGitHubUser() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
  }
}
fetchGitHubUser();
