// Promise bug fix: The original code had a bug where the total score was not being calculated correctly due to the asynchronous nature of the fetchScore function. The getTotalScore function was not waiting for all the fetchScore promises to resolve before calculating the total score. The fixed code uses async/await to ensure that each score is fetched and added to the total before returning the final result.

const scoresById = { 1: 10, 2: 20, 3: 30 };

function fetchScore(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(scoresById[id] ?? 0), Math.random() * 60 + 20);
  });
}
async function getTotalScore(ids) {
  let total = 0;
  return Promise.resolve().then(() => {
    ids.forEach((id) => {
      fetchScore(id).then((score) => {
        total += score;
      });
    });

    return total;
  });
  return total;
}
getTotalScore([1, 2, 3]).then((total) => {
  console.log("total:", total);
  console.log("Expected total:", 60);
});

// The above code still has a bug because the total score is being calculated before all the fetchScore promises have resolved. To fix this, we can use Promise.all to wait for all the fetchScore promises to resolve before calculating the total score.

const scoresById = { 1: 10, 2: 20, 3: 30 };

function fetchScore(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(scoresById[id] ?? 0), Math.random() * 60 + 20);
  });
}
async function getTotalScore(ids) {
  let total = 0;
  await Promise.all(ids.map((id) => fetchScore(id))).then((scores) => {
    total = scores.reduce((acc, score) => acc + score, 0);
  });
  return total;
}
getTotalScore([1, 2, 3]).then((total) => {
  console.log("total:", total);
  console.log("Expected total:", 60);
});

// async await solution

const scoresById = { 1: 10, 2: 20, 3: 30 };

function fetchScore(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(scoresById[id] ?? 0), Math.random() * 60 + 20);
  });
}
async function getTotalScore(ids) {
  let total = 0;
  for (const id of ids) {
    const score = await fetchScore(id);
    total += score;
  }
  return total;
}
getTotalScore([1, 2, 3]).then((total) => {
  console.log("total:", total);
  console.log("Expected total:", 60);
});
