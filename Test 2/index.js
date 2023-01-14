const calculateRank = (scores, playerScores) => {
  let ranks = [];

  for (const playerScore of playerScores) {
    let rank = 1;
    for (const score of scores) {
      if (playerScore < score) rank = rank + 1;
    }
    ranks.push(rank);
  }
  return ranks;
};

const scores = [100, 100, 50, 40, 40, 20, 10];
const gitScores = [5, 25, 50, 120];

console.log(calculateRank(scores, gitScores));
