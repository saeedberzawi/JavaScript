function coins_combinations(amount, coins) {
  // write your code here

  const table = Array.from({ length: amount + 1 }, () =>
    Array(coins.length).fill(0)
  );

  for (let j = 0; j < coins.length; j++) {
    table[0][j] = 1;
  }

  for (let i = 1; i < table.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      const withoutCoin = j > 0 ? table[i][j - 1] : 0;
      const withCoin = i - coins[j] >= 0 ? table[i - coins[j]][j] : 0;
      table[i][j] = withoutCoin + withCoin;
    }
  }

  return table[amount][coins.length - 1];
}

console.log(coins_combinations(3, [1,9, 5]));
// ---------------------------------
