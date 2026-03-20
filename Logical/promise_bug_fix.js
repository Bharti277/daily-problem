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
  //   return Promise.resolve().then(() => {
  //     ids.forEach((id) => {
  //       fetchScore(id).then((score) => {
  //         total += score;
  //       });
  //     });

  //     return total;
  //   });
  return total;
}
getTotalScore([1, 2, 3]).then((total) => {
  console.log("total:", total);
  console.log("Expected total:", 60);
});
